from sqlalchemy import create_engine, MetaData
from databases import Database

DATABASE_URL = "mysql+aiomysql://root:1243@localhost:3306/reservas_db"

database = Database(DATABASE_URL)
engine = create_engine(DATABASE_URL)
metadata = MetaData()