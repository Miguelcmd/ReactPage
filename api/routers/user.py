# api/routers/user.py
from fastapi import APIRouter, HTTPException
from mysql.connector import Error
from ..db.connection import get_db_connection
from ..models.user import User
from passlib.context import CryptContext
from ..models.user import UserLogin

user_router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Endpoint para registrar usuarios
@user_router.post("/register", response_model=dict)
async def register_user(user: User):
    connection = get_db_connection()
    if not connection:
        raise HTTPException(status_code=500, detail="Error de conexión a la base de datos")

    cursor = connection.cursor()
    try:
        # Cifra la contraseña antes de guardarla
        hashed_password = pwd_context.hash(user.password)
        cursor.execute("INSERT INTO users (username, password, email) VALUES (%s, %s, %s)",
                       (user.username, hashed_password, user.email))
        connection.commit()
        return {"message": "Usuario registrado exitosamente"}
    except Error as e:
        print(f"Error al registrar el usuario: {e}")
        raise HTTPException(status_code=500, detail="Error al registrar el usuario")
    finally:
        cursor.close()
        connection.close()

# Endpoint para el inicio de sesión
@user_router.post("/login", response_model=dict)
async def login_user(user: UserLogin):
    connection = get_db_connection()
    
    if not connection:
        raise HTTPException(status_code=500, detail="Error de conexión a la base de datos")

    cursor = connection.cursor(dictionary=True)
    try:
        # Consulta para verificar el usuario y obtener la contraseña
        cursor.execute("SELECT * FROM users WHERE email = %s", (user.email,))
        db_user = cursor.fetchone()
        
        # Verifica si la contraseña proporcionada es correcta
        if not db_user or not pwd_context.verify(user.password, db_user["password"]):
            raise HTTPException(status_code=401, detail="Credenciales inválidas")

        # Retorna un mensaje de éxito o un token si usas autenticación basada en tokens
        return {"message": "Inicio de sesión exitoso", 
                "user_id": db_user["id"],
                 "username": db_user["username"]
        }
    except Error as e:
        print(f"Error al iniciar sesión: {e}")
        raise HTTPException(status_code=500, detail="Error al iniciar sesión")
    finally:
        cursor.close()
        connection.close()
    