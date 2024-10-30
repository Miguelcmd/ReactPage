# api/routers/user.py
from fastapi import APIRouter, HTTPException, Depends
from mysql.connector import Error
from ..db.connection import get_db_connection
from ..models.user import User
from ..dependencies import get_current_active_user, get_current_admin_user

user_router = APIRouter()

# Roles de usuario

@user_router.get("/profile", dependencies=[Depends(get_current_active_user)])
async def get_profile():
    return {"message": "Perfil de usuario"}

@user_router.get("/admin", dependencies=[Depends(get_current_admin_user)])
async def admin_dashboard():
    return {"message": "Panel de administración"}

#Registro

@user_router.post("/register", response_model=dict)
async def register_user(user: User):
    connection = get_db_connection()
    if not connection:
        raise HTTPException(status_code=500, detail="Error de conexión a la base de datos")

    cursor = connection.cursor()
    try:
        cursor.execute("INSERT INTO users (username, password, email, role) VALUES (%s, %s, %s, %s)",
                       (user.username, user.password, user.email, user.role))
        connection.commit()
        return {"message": "Usuario registrado exitosamente"}
    except Error as e:
        print(f"Error al registrar el usuario: {e}")
        raise HTTPException(status_code=500, detail="Error al registrar el usuario")
    finally:
        cursor.close()
        connection.close()
