"""
Configuración de la aplicación
"""

from pydantic_settings import BaseSettings
import os
from dotenv import load_dotenv

load_dotenv()

class Settings(BaseSettings):
    """Configuración de la aplicación"""
    
    MONGODB_URI: str = os.getenv("MONGODB_URI", "mongodb://localhost:27017/deanrre")
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your-secret-key-change-in-production")
    DEBUG: bool = os.getenv("DEBUG", "True").lower() == "true"
    
    class Config:
        case_sensitive = True

settings = Settings()

