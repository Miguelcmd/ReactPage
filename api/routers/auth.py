# api/routers/auth.py
from fastapi import APIRouter, HTTPException, Depends
from ..db.connection import get_db_connection
from ..auth import create_access_token
from ..models.user import User
from datetime import timedelta

auth_router = APIRouter()

@auth_router.post("/login")
async def login(email: str, password: str):
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT username, email, role FROM users WHERE email=%s AND password=%s", (email, password))
    user = cursor.fetchone()

    if not user:
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")

    access_token = create_access_token(
        data={"sub": user[1], "role": user[2]},  # Incluye el rol en el token
        expires_delta=timedelta(hours=1)
    )
    return {"access_token": access_token, "token_type": "bearer"}
