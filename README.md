# 🎲 Deanrre - Mundo de Juego de Rol

Un proyecto ambicioso y personal para crear y gestionar un mundo de juego de rol completo.

## 📖 Descripción del Proyecto

**Deanrre** es una plataforma web completa diseñada para jugadores de rol que permite crear, gestionar y vivir aventuras en un mundo de fantasía. El proyecto incluye un sistema completo de gestión de personajes, historias, razas, profesiones, lore del mundo y una galería de imágenes.

### 🎯 Funcionalidades Principales

- **👤 Sistema de Personajes**: Creación y gestión completa de personajes
- **📜 Sistema de Historia**: Historia personalizada para cada jugador
- **🏛️ Razas y Profesiones**: Catálogo completo de razas y profesiones disponibles
- **🌍 Lore del Mundo**: Documentación completa del mundo de Deanrre
- **🖼️ Galería de Imágenes**: Almacenamiento y visualización de imágenes del juego
- **🎮 Panel de Usuario**: Sistema de usuarios y jugadores
- **📊 Dashboard**: Panel de control para administradores

## 🚀 Tecnologías Utilizadas

### Frontend
- **React** - Biblioteca de JavaScript para interfaces de usuario
- **CSS** - Estilos personalizados
- **HTML5** - Estructura semántica

### Backend
- **Python** - Lenguaje de programación del servidor
- **FastAPI** o **Flask** - Framework web
- **PyMongo** - Driver de MongoDB para Python

### Base de Datos
- **MongoDB** - Base de datos NoSQL para almacenamiento flexible

### Herramientas de Desarrollo
- **Git** - Control de versiones
- **GitHub** - Almacenamiento de código
- Compatible con **Linux** y **Windows**

## 📁 Estructura del Proyecto (Monorepo)

```
deanrre/
├── frontend/          # Aplicación React
│   ├── public/       # Archivos estáticos
│   ├── src/          # Código fuente React
│   │   ├── components/  # Componentes reutilizables
│   │   ├── pages/       # Páginas de la aplicación
│   │   ├── services/    # Servicios API
│   │   └── styles/      # Estilos CSS
│   ├── package.json
│   └── README.md
├── backend/          # API Python
│   ├── app/          # Código de la aplicación
│   │   ├── models/      # Modelos de datos
│   │   ├── routes/      # Endpoints de la API
│   │   └── services/    # Lógica de negocio
│   ├── requirements.txt
│   └── README.md
├── database/         # Scripts y esquemas de base de datos
│   ├── seeds/        # Datos iniciales
│   └── schemas/      # Documentación de esquemas
├── docs/             # Documentación adicional
│   └── LORE/        # Documentación del mundo de Deanrre
├── .gitignore
├── README.md        # Este archivo
└── LICENSE

```

## 🛠️ Instalación y Configuración

### Requisitos Previos

- Python 3.8+
- Node.js 16+
- MongoDB
- Git

### Pasos de Instalación

#### 1. Clonar el Repositorio

```bash
git clone https://github.com/Hasbon/deanrre.git
cd deanrre
```

#### 2. Backend (Python)

```bash
cd backend
python -m venv venv

# En Windows
venv\Scripts\activate

# En Linux/Mac
source venv/bin/activate

pip install -r requirements.txt
```

#### 3. Frontend (React)

```bash
cd frontend
npm install
```

#### 4. Configurar MongoDB

Asegúrate de tener MongoDB corriendo localmente o configura la URL de conexión en las variables de entorno.

### Variables de Entorno

Crea un archivo `.env` en el directorio `backend/`:

```env
MONGODB_URI=mongodb://localhost:27017/deanrre
SECRET_KEY=tu_clave_secreta_aqui
FLASK_APP=app.py
```

## 🎮 Uso

### Iniciar el Servidor de Desarrollo

#### Backend (Terminal 1)
```bash
cd backend
python app.py
```

#### Frontend (Terminal 2)
```bash
cd frontend
npm start
```

La aplicación estará disponible en:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 📝 Estado del Proyecto

### ✅ Por Implementar

- [ ] Sistema de autenticación de usuarios
- [ ] Creación y edición de personajes
- [ ] Sistema de razas y profesiones
- [ ] Gestor de historias
- [ ] Sección de LORE del mundo
- [ ] Galería de imágenes
- [ ] Panel de administración
- [ ] API REST completa

## 🤝 Contribuir

Este es un proyecto personal con colaboración abierta. Si estás interesado en contribuir:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 👥 Colaboradores

- **Hasbon** - Propietario y Desarrollador Principal
- [Colaborador externo] - Desarrollador adicional (compatible con Linux)

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.

## 📞 Contacto

Para preguntas o sugerencias, puedes crear un issue en el repositorio de GitHub.

---

**Desarrollado con ❤️ para la comunidad de jugadores de rol**

*"Cada aventura comienza con un dado."*

