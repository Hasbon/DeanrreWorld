"""
Script para importar razas desde JSON a MongoDB
"""

import json
import sys
import os
from pymongo import MongoClient

def load_json_data(json_file):
    """Carga datos desde un archivo JSON"""
    try:
        with open(json_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        print(f"[OK] JSON cargado desde: {json_file}")
        return data.get('data', [])
    except Exception as e:
        print(f"[ERROR] Error al cargar JSON: {e}")
        return None

def connect_to_mongodb(uri="mongodb://localhost:27017/"):
    """Conecta a MongoDB"""
    try:
        client = MongoClient(uri)
        db = client['deanrre']
        print("[OK] Conectado a MongoDB")
        return db
    except Exception as e:
        print(f"[ERROR] Error al conectar a MongoDB: {e}")
        return None

def import_races_to_mongodb(db, races_data):
    """Importa razas a la colección races"""
    try:
        collection = db['races']
        
        # Eliminar datos existentes
        result = collection.delete_many({})
        print(f"[DELETE] Documentos eliminados: {result.deleted_count}")
        
        # Insertar nuevos datos
        if races_data:
            result = collection.insert_many(races_data)
            print(f"[OK] {len(result.inserted_ids)} razas insertadas en MongoDB")
            
            # Mostrar estadísticas
            print(f"\n[STATS] Estadisticas de la coleccion:")
            print(f"   - Total de documentos: {collection.count_documents({})}")
            
            # Mostrar algunas razas
            print(f"\n[DATA] Primeras razas en la base de datos:")
            for race in collection.find().limit(3):
                print(f"   - {race}")
            
            return True
        else:
            print("[WARNING] No hay datos para insertar")
            return False
            
    except Exception as e:
        print(f"[ERROR] Error al importar datos: {e}")
        return False

def main():
    print("=" * 60)
    print("IMPORTADOR DE RAZAS A MONGODB - DEANRRE")
    print("=" * 60)
    
    # Ruta del archivo JSON
    json_file = os.path.join(os.path.dirname(__file__), '..', 'Razas.json')
    
    # Cargar datos JSON
    races_data = load_json_data(json_file)
    
    if races_data:
        print(f"\n[INFO] Datos cargados: {len(races_data)} razas")
        
        # Conectar a MongoDB
        db = connect_to_mongodb()
        
        if db:
            # Importar a MongoDB
            success = import_races_to_mongodb(db, races_data)
            
            if success:
                print("\n[OK] Importacion completada exitosamente!")
            else:
                print("\n[ERROR] La importacion fallo")
        else:
            print("\n[ERROR] No se pudo conectar a MongoDB")
    else:
        print("\n[ERROR] No hay datos para importar")

if __name__ == "__main__":
    main()

