# api/main.py
from fastapi import FastAPI
from .routers.auth import auth_router
from .routers.user import user_router
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

# Registrar los routers (roles de usuario)
app.include_router(auth_router, prefix="/auth", tags=["Auth"])
app.include_router(user_router, prefix="/users", tags=["Users"])