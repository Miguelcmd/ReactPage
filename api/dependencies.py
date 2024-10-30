# api/dependencies.py
from fastapi import Depends, HTTPException
from .auth import verify_token
from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

def get_current_user(token: str = Depends(oauth2_scheme)):
    payload = verify_token(token)
    return payload

def get_current_active_user(current_user=Depends(get_current_user)):
    if current_user["role"] not in ["user", "admin"]:
        raise HTTPException(status_code=403, detail="No tienes permisos para acceder a esta ruta")
    return current_user

def get_current_admin_user(current_user=Depends(get_current_user)):
    if current_user["role"] != "admin":
        raise HTTPException(status_code=403, detail="No tienes permisos de administrador")
    return current_user
