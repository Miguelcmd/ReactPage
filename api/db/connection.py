# api/db/connection.py
import mysql.connector
from mysql.connector import Error
from api.config import settings
from dotenv import load_dotenv
import os

load_dotenv()

def get_db_connection():
    try:
        connection = mysql.connector.connect(
            host=os.getenv("DB_HOST"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            database=os.getenv("DB_NAME")
        )
        return connection
    except Error as e:
        print(f"Error al conectar a MySQL: {e}")
        return None

def get_connection():
    connection = mysql.connector.connect(
        host=settings.database_url.split('@')[-1].split(':')[0],
        user=settings.database_url.split('//')[-1].split(':')[0],
        password=settings.database_url.split(':')[-1].split('@')[0],
        database=settings.database_url.split('/')[-1]
    )
    return connection