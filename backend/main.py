# main.py
from fastapi import FastAPI
from config.db import database
from routes import reservas

app = FastAPI()

# Conectar y desconectar la base de datos con eventos
@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

# Incluir las rutas
app.include_router(reservas.router, prefix="/api")