# api/config.py
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseSettings
import os
from sqlalchemy.engine.url import make_url

class Settings(BaseSettings):
    database_url: str
    allowed_origins: str = "http://localhost:3000"

    class Config:
        env_file = f".env.{os.getenv('ENVIRONMENT', 'development')}"

# Validación de conexión
settings = Settings()
try:
    make_url(settings.database_url)
except Exception as e:
    raise ValueError(f"Invalid DATABASE_URL: {e}")

def configure_cors(app):
    origins = settings.allowed_origins.split(",")
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
    )
