from pydantic import BaseModel, Field

class Reservation(BaseModel):
    user_id: int = Field(..., description="ID del usuario que hace la reserva")
    hotel_name: str = Field(..., min_length=1, max_length=255, description="Nombre del hotel")
    nights: int = Field(..., ge=1, description="Número de noches reservadas")
    total_price: float = Field(..., gt=0, description="Precio total de la reserva")

    class Config:
        orm_mode = True
