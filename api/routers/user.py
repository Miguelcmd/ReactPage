# api/routers/user.py
from fastapi import APIRouter, HTTPException
from mysql.connector import Error
from ..db.connection import get_db_connection
from ..models.user import User

user_router = APIRouter()

@user_router.post("/register", response_model=dict)
async def register_user(user: User):
    connection = get_db_connection()
    if not connection:
        raise HTTPException(status_code=500, detail="Error de conexión a la base de datos")

    cursor = connection.cursor()
    try:
        cursor.execute("INSERT INTO users (username, password, email) VALUES (%s, %s, %s)",
                       (user.username, user.password, user.email))
        connection.commit()
        return {"message": "Usuario registrado exitosamente"}
    except Error as e:
        print(f"Error al registrar el usuario: {e}")
        raise HTTPException(status_code=500, detail="Error al registrar el usuario")
    finally:
        cursor.close()
        connection.close()
