from pydantic import BaseModel
from datetime import date

class Reserva(BaseModel):

    id: int
    hotel_id: int
    user_id: int
    fecha_inicio: date
    fecha_fin: date
    