# Database - Deanrre

Scripts y documentación de la base de datos MongoDB para Deanrre.

## 📊 Estructura de Base de Datos

### Colecciones Principales

#### characters (Personajes)
```json
{
  "_id": "ObjectId",
  "name": "string",
  "race": "ObjectId (ref: races)",
  "profession": "ObjectId (ref: professions)",
  "level": "number",
  "history": "string",
  "stats": {
    "strength": "number",
    "dexterity": "number",
    "constitution": "number",
    "intelligence": "number",
    "wisdom": "number",
    "charisma": "number"
  },
  "player_id": "ObjectId (ref: users)",
  "created_at": "date",
  "updated_at": "date"
}
```

#### races (Razas)
```json
{
  "_id": "ObjectId",
  "name": "string",
  "description": "string",
  "special_abilities": ["string"],
  "created_at": "date"
}
```

#### professions (Profesiones)
```json
{
  "_id": "ObjectId",
  "name": "string",
  "description": "string",
  "skills": ["string"],
  "created_at": "date"
}
```

#### users (Usuarios/Jugadores)
```json
{
  "_id": "ObjectId",
  "username": "string",
  "email": "string",
  "password_hash": "string",
  "created_at": "date",
  "last_login": "date"
}
```

#### lore (Historia del Mundo)
```json
{
  "_id": "ObjectId",
  "title": "string",
  "content": "string",
  "category": "string",
  "tags": ["string"],
  "created_at": "date",
  "updated_at": "date"
}
```

#### gallery (Galería de Imágenes)
```json
{
  "_id": "ObjectId",
  "title": "string",
  "description": "string",
  "url": "string",
  "category": "string",
  "tags": ["string"],
  "created_at": "date"
}
```

## 🚀 Scripts de Importación

### Convertir Excel a JSON y CSV

```bash
cd database/scripts
python import_races.py
```

Este script:
- Lee el archivo `Razas.xlsx`
- Genera `Razas.csv`
- Genera `Razas.json`
- Muestra una vista previa de los datos

### Importar a MongoDB

```bash
cd database/scripts
python import_to_mongodb.py
```

Este script:
- Lee `Razas.json`
- Se conecta a MongoDB
- Limpia la colección `races` existente
- Inserta las nuevas razas
- Muestra estadísticas

## 🌱 Seeds

Los archivos en `seeds/` contienen datos iniciales para poblar la base de datos.

## 📝 Notas

- Base de datos: MongoDB
- Puerto por defecto: 27017
- Nombre de BD: deanrre
- Asegúrate de tener MongoDB corriendo antes de importar
