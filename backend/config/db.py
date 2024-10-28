from databases import Database
from sqlalchemy import MetaData

# URL de conexión a la base de datos
DATABASE_URL = "mysql+aiomysql://root:1243@localhost:3306/booking_db"

# Instancia de la base de datos
database = Database(DATABASE_URL)

# Metadata para crear tablas
metadata = MetaData()