# api/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import mysql.connector
from mysql.connector import Error

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Cambia esto si React está en otro origen
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Configuración de conexión a la base de datos
def get_db_connection():
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="1243",
            database="booking_db"
        )
        return connection
    except Error as e:
        print(f"Error al conectar a MySQL: {e}")
        return None

# Modelo Pydantic para los datos del usuario
class User(BaseModel):
    username: str
    password: str
    email: str

@app.post("/register")
async def register_user(user: User):
    connection = get_db_connection()
    if not connection:
        raise HTTPException(status_code=500, detail="Error de conexión a la base de datos")

    cursor = connection.cursor()
    try:
        # Inserta el usuario en la base de datos
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

        

        
