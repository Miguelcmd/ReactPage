# api/models/user.py
from pydantic import BaseModel, EmailStr, Field

class User(BaseModel):
    username: str = Field(..., min_length=3, max_length=50, description="Nombre de usuario")
    email: EmailStr = Field(..., description="Correo electrónico válido")
    password: str = Field(..., min_length=6, max_length=50, description="Contraseña del usuario")


    class Config:
        orm_mode = True

class UserLogin(BaseModel):
    email: EmailStr
    password: str


