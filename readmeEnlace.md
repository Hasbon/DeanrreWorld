# 🔗 Configuración de Enlaces Clickeables para Cursor

## 📋 Instrucciones Rápidas

Para configurar enlaces clickeables que funcionen correctamente con Cursor, usa estas instrucciones:

### 🎯 Formato de Enlaces

**Para mostrar código con enlaces clickeables:**

````markdown
**Archivo:** `ruta/del/archivo` **Línea:**
[Número de línea](cursor://file/RUTA_COMPLETA_ABSOLUTA:línea)

```línea_inicio:línea_fin:ruta/del/archivo
código aquí
```
````

```

### 🛠️ Configuración del Workspace

**Ruta base del proyecto:**
```

C:\Hasbon\Archivos\Escritorio\Familia\Daniel\Forja de codigo\spaSantaRosa\spasantarosa

````

### 📝 Ejemplos de Uso

**1. Enlace a línea específica:**
```markdown
[Línea 22](cursor://file/C:/Hasbon/Archivos/Escritorio/Familia/Daniel/Forja%20de%20codigo/spaSantaRosa/spasantarosa/src/componentes/componentesApp/seleccionservicios/seleccionservicios.css:22)
````

**2. Código citado con formato:**

````markdown
```22:35:src/componentes/componentesApp/seleccionservicios/seleccionservicios.css
.servicio-opcion {
  display: flex;
  /* resto del código */
}
```
````

```

### ⚡ Instrucción Rápida para IA

**Copia y pega esta instrucción en futuros chats:**

```

CONFIGURACIÓN DE ENLACES: Estoy usando Cursor como editor. Cuando muestres código o hagas
modificaciones, usa estos formatos:

1. Enlaces clickeables:
   cursor://file/C:/Hasbon/Archivos/Escritorio/Familia/Daniel/Forja%20de%20codigo/spaSantaRosa/spasantarosa/RUTA_RELATIVA:LÍNEA

2. Código citado: ```línea_inicio:línea_fin:ruta_relativa

3. Ruta base del proyecto: C:\Hasbon\Archivos\Escritorio\Familia\Daniel\Forja de
   codigo\spaSantaRosa\spasantarosa

Esto me permite hacer clic directamente en los enlaces y ir a la sección exacta del código.

```

### 🔧 Troubleshooting

**Si los enlaces no funcionan:**
1. Verificar que la ruta absoluta sea correcta
2. Asegurarse de que los espacios estén codificados como `%20`
3. Confirmar que el archivo existe en la ruta especificada

### 📁 Estructura del Proyecto

```

spasantarosa/ ├── src/ │ ├── componentes/ │ │ └── componentesApp/ │ │ ├── seleccionservicios/ │ │ │
└── seleccionservicios.css │ │ └── intalaciones/ │ │ └── instalaciones.css │ ├── views/ │ └── ...
└── ...

```

---

**Fecha de creación:** $(Get-Date)
**Editor:** Cursor
**Sistema:** Windows 10
**Proyecto:** Spa Santa Rosa
```
