# api/main.py
from fastapi import FastAPI
from .config import configure_cors
from .routers.user import user_router            

app = FastAPI()

# Configurar CORS y otros middlewares
configure_cors(app)

# Registrar los routers/endpoints

app.include_router(user_router, prefix="/users", tags=["Users"]) 
@app.get("/")
async def root():
    return {"message": "API de registro funcionando"}