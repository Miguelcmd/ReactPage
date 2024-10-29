# api/db/connection.py
import mysql.connector
from mysql.connector import Error

def get_db_connection():
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="1243",
            database="booking_db"
        )
        return connection
    except Error as e:
        print(f"Error al conectar a MySQL: {e}")
        return None
