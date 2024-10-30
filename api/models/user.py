# api/models/user.py
from pydantic import BaseModel, EmailStr, Field

class User(BaseModel):
    username: str = Field(..., min_length=3, max_length=50, description="Nombre de usuario")
    email: EmailStr = Field(..., description="Correo electrónico válido")
    password: str = Field(..., min_length=6, max_length=50, description="Contraseña del usuario")
    role: str = Field(..., description="Rol del usuario (admin, user)")
    
    
    
    class Config:
        orm_mode = True 
