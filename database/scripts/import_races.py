"""
Script para importar razas desde Excel a JSON, CSV y MongoDB
"""

import pandas as pd
import json
import sys
import os

# Agregar el directorio raíz al path para importar config
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))

def read_excel_to_dataframe(file_path):
    """Lee el archivo Excel y retorna un DataFrame"""
    try:
        df = pd.read_excel(file_path)
        print(f"[OK] Archivo leido exitosamente: {file_path}")
        print(f"[INFO] Dimensiones: {df.shape[0]} filas x {df.shape[1]} columnas")
        print(f"[INFO] Columnas: {list(df.columns)}")
        return df
    except Exception as e:
        print(f"[ERROR] Error al leer el archivo: {e}")
        return None

def save_to_csv(df, output_path):
    """Guarda el DataFrame como CSV"""
    try:
        df.to_csv(output_path, index=False, encoding='utf-8')
        print(f"[OK] CSV guardado en: {output_path}")
    except Exception as e:
        print(f"[ERROR] Error al guardar CSV: {e}")

def save_to_json(df, output_path):
    """Guarda el DataFrame como JSON"""
    try:
        # Convertir DataFrame a diccionario
        records = df.to_dict(orient='records')
        
        # Agregar metadata
        data = {
            "metadata": {
                "total_records": len(records),
                "columns": list(df.columns),
                "source": "Razas.xlsx"
            },
            "data": records
        }
        
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        print(f"[OK] JSON guardado en: {output_path}")
    except Exception as e:
        print(f"[ERROR] Error al guardar JSON: {e}")

def main():
    # Rutas de archivos
    excel_file = os.path.join(os.path.dirname(__file__), '..', 'Razas.xlsx')
    csv_file = os.path.join(os.path.dirname(__file__), '..', 'Razas.csv')
    json_file = os.path.join(os.path.dirname(__file__), '..', 'Razas.json')
    
    print("=" * 60)
    print("CONVERSOR DE RAZAS - DEANRRE")
    print("=" * 60)
    
    # Leer Excel
    df = read_excel_to_dataframe(excel_file)
    
    if df is not None:
        # Mostrar vista previa
        print("\nVista previa de los datos:")
        print(df.head().to_string())
        
        # Guardar en CSV
        save_to_csv(df, csv_file)
        
        # Guardar en JSON
        save_to_json(df, json_file)
        
        print("\nConversion completada exitosamente!")
    else:
        print("\nNo se pudo completar la conversion")

if __name__ == "__main__":
    main()

