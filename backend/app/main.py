"""
Deanrre - Backend API
Punto de entrada principal de la aplicación
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Deanrre API",
    description="API para el mundo de juego de rol Deanrre",
    version="0.1.0"
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    """Endpoint raíz"""
    return {
        "message": "¡Bienvenido a Deanrre!",
        "version": "0.1.0",
        "status": "API funcionando correctamente"
    }

@app.get("/api/health")
def health_check():
    """Endpoint de salud"""
    return {"status": "healthy"}

# Aquí se importarán los routers cuando los creemos
# from app.routes import characters, races, professions

# app.include_router(characters.router, prefix="/api/characters", tags=["characters"])
# app.include_router(races.router, prefix="/api/races", tags=["races"])
# app.include_router(professions.router, prefix="/api/professions", tags=["professions"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)

