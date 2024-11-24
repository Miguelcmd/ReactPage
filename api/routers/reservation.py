from fastapi import APIRouter, HTTPException
from mysql.connector import Error
from ..db.connection import get_db_connection
from ..models.reservation import Reservation

reservation_router = APIRouter()

@reservation_router.post("/create", response_model=dict)
async def create_reservation(reservation: Reservation):
    connection = get_db_connection()
    if not connection:
        raise HTTPException(status_code=500, detail="Error de conexión a la base de datos")

    cursor = connection.cursor()
    try:
        # Inserta la nueva reserva en la base de datos
        cursor.execute(
            "INSERT INTO reservations (user_id, hotel_name, nights, total_price) VALUES (%s, %s, %s, %s)",
            (reservation.user_id, reservation.hotel_name, reservation.nights, reservation.total_price)
        )
        connection.commit()
        return {"message": "Reserva creada exitosamente"}
    except Error as e:
        print(f"Error al crear la reserva: {e}")
        raise HTTPException(status_code=500, detail="Error al crear la reserva")
    finally:
        cursor.close()
        connection.close()
