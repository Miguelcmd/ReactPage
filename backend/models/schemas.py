#schemas.py
from pydantic import BaseModel
from datetime import date

class ReservaBase(BaseModel):
    hotel_id: int
    user_id: int
    fecha_inicio: date
    fecha_fin: date

class Reserva(ReservaBase):
    id: int
