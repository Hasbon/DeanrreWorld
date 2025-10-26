"""
Configuración de conexión a MongoDB
"""

from motor.motor_asyncio import AsyncIOMotorClient
from app.config import settings

class Database:
    """Clase para gestionar la conexión a MongoDB"""
    
    client: AsyncIOMotorClient = None
    
database = Database()

async def connect_to_mongo():
    """Conectar a MongoDB"""
    database.client = AsyncIOMotorClient(settings.MONGODB_URI)
    print("✅ Conectado a MongoDB")

async def close_mongo_connection():
    """Cerrar conexión a MongoDB"""
    database.client.close()
    print("❌ Desconectado de MongoDB")

async def get_database():
    """Obtener instancia de la base de datos"""
    db_name = settings.MONGODB_URI.split("/")[-1]
    return database.client[db_name]

