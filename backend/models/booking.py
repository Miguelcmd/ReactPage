#booking.py
from sqlalchemy import Table, Column, Integer, String, Date, ForeignKey
from config.db import metadata, engine

reservas = Table(
    "reservas", 
    metadata, 
    Column("id", Integer, primary_key=True),
    Column("hotel_id", Integer),
    Column("user_id", Integer),
    Column("fecha_inicio", Date),
    Column("fecha_fin", Date),
)

metadata.create_all(engine) 
