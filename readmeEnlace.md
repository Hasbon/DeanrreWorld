# Configuracion de Enlaces Clickeables para Cursor

## Instrucciones Rapidas

Para configurar enlaces clickeables que funcionen correctamente con Cursor, usa estas instrucciones:

### Formato de Enlaces

**Para mostrar codigo con enlaces clickeables:**

````markdown
**Archivo:** `ruta/del/archivo` **Linea:**
[Numero de linea](cursor://file/RUTA_COMPLETA_ABSOLUTA:linea)

```linea_inicio:linea_fin:ruta/del/archivo
codigo aqui
```
````

### Configuracion del Workspace

**Ruta base del proyecto:**
```
C:\Hasbon\Archivos\Escritorio\Familia\Daniel\ROL FAMILIA\DeanrreWebSite\deanrre
```

### Ejemplos de Uso

**1. Enlace a linea especifica:**
```markdown
[Linea 22](cursor://file/C:/Hasbon/Archivos/Escritorio/Familia/Daniel/ROL%20FAMILIA/DeanrreWebSite/deanrre/README.md:22)
```

**2. Codigo citado con formato:**

````markdown
```1:20:README.md
# Deanrre - Mundo de Juego de Rol

Un proyecto ambicioso y personal...
```
````

### Instruccion Rapida para IA

**Copia y pega esta instruccion en futuros chats:**

```
CONFIGURACION DE ENLACES: Estoy usando Cursor como editor. Cuando muestres codigo o hagas
modificaciones, usa estos formatos:

1. Enlaces clickeables:
   cursor://file/C:/Hasbon/Archivos/Escritorio/Familia/Daniel/ROL%20FAMILIA/DeanrreWebSite/deanrre/RUTA_RELATIVA:LINEA

2. Codigo citado: ```linea_inicio:linea_fin:ruta_relativa

3. Ruta base del proyecto: C:\Hasbon\Archivos\Escritorio\Familia\Daniel\ROL FAMILIA\DeanrreWebSite\deanrre

Esto me permite hacer clic directamente en los enlaces y ir a la seccion exacta del codigo.
```

### Troubleshooting

**Si los enlaces no funcionan:**
1. Verificar que la ruta absoluta sea correcta
2. Asegurarse de que los espacios esten codificados como `%20`
3. Confirmar que el archivo existe en la ruta especificada

### Estructura del Proyecto

```
deanrre/
├── frontend/          # Aplicacion React
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── styles/
├── backend/          # API Python
│   ├── app/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── schemas/
│   └── venv/
├── database/         # MongoDB
│   ├── Razas.json
│   ├── Razas.csv
│   └── scripts/
├── docs/             # Documentacion
│   └── LORE/
└── README.md
```

---

**Fecha de creacion:** 2024
**Editor:** Cursor
**Sistema:** Windows 10 / Linux compatible
**Proyecto:** Deanrre - Mundo de Juego de Rol
**GitHub:** https://github.com/Hasbon/DeanrreWorld
