from fastapi import APIRouter, HTTPException
from config.db import database
from backend.models.Hotels.booking import reservas
from backend.models.Hotels.schemas import Reserva
from typing import List

router = APIRouter()

@router.get("/reservas", response_model=List[Reserva])
async def obtener_reservas():
    query = reservas.select()
    return await database.fetch_all(query)


@router.post("/reservas", response_model=Reserva)
async def crear_reserva(reserva: Reserva):
    query = reservas.insert().values(
        hotel_id=reserva.hotel_id,
        user_id=reserva.user_id,
        fecha_inicio=reserva.fecha_inicio,
        fecha_fin=reserva.fecha_fin,
    )

    last_record_id = await database.execute(query)
    return {**reserva.dict(), "id": last_record_id}

@router.get("/reservas/{reserva_id}", response_model=Reserva)
async def obtener_reserva(reserva_id: int):
    query = reservas.select().where(reservas.c.id == reserva_id)
    reserva = await database.fetch_one(query)
    if reserva is None:
        raise HTTPException(status_code=404, detail="Reserva no encontrada")
    return reserva

@router.delete("/reservas/{reserva_id}")
async def eliminar_reserva(reserva_id: int):
    query = reservas.delete().where(reservas.c.id == reserva_id)
    await database.execute(query)
    return {"message": "Reserva eliminada con éxito"}