# Deanrre - Backend API

Backend en Python con FastAPI para el proyecto Deanrre.

## 🚀 Inicio Rápido

### Instalación

```bash
# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt
```

### Configuración

Crea un archivo `.env` en el directorio backend:

```env
MONGODB_URI=mongodb://localhost:27017/deanrre
SECRET_KEY=tu_clave_secreta_segura_aqui
DEBUG=True
```

### Ejecutar

```bash
uvicorn app.main:app --reload
```

O si prefieres usar el script:

```bash
python app.py
```

La API estará disponible en: http://localhost:8000

Documentación automática en:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## 📁 Estructura

```
backend/
├── app/
│   ├── main.py          # Punto de entrada
│   ├── models/          # Modelos de datos
│   ├── routes/          # Endpoints de la API
│   ├── services/        # Lógica de negocio
│   ├── schemas/         # Esquemas Pydantic
│   └── config.py        # Configuración
├── requirements.txt
└── README.md
```

## 🔗 Endpoints Principales

### Personajes
- `GET /api/characters` - Listar todos los personajes
- `POST /api/characters` - Crear nuevo personaje
- `GET /api/characters/{id}` - Obtener personaje por ID
- `PUT /api/characters/{id}` - Actualizar personaje
- `DELETE /api/characters/{id}` - Eliminar personaje

### Razas
- `GET /api/races` - Listar razas
- `POST /api/races` - Crear raza

### Profesiones
- `GET /api/professions` - Listar profesiones
- `POST /api/professions` - Crear profesión

## 🛠️ Desarrollo

### Formato de Código

```bash
# Usar black para formateo
black app/

# Usar flake8 para linting
flake8 app/
```

## 📝 Notas

- Compatible con Linux y Windows
- Requiere Python 3.8+
- MongoDB debe estar corriendo

