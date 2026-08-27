# ing_sw_ayudantia2

API REST sencilla para gestionar mascotas, desarrollada con Node.js y Express. El proyecto implementa las operaciones CRUD básicas sobre una colección almacenada en memoria.

## Requisitos

- Node.js y npm instalados. Se recomienda Node.js 18 o superior.

## Dependencias

La aplicación utiliza la siguiente dependencia de producción:

- `express` `^5.2.1`: framework para crear el servidor HTTP y las rutas de la API.

Las dependencias se instalan automáticamente a partir de `package.json`.

## Instalación

Clona o descarga el proyecto, entra en su directorio y ejecuta:

```bash
npm install
```

## Uso

Inicia el servidor con:

```bash
node src/index.js
```

Cuando el servidor esté activo, la API estará disponible en:

```text
http://localhost:3000/api/mascotas
```

Para detenerlo, presiona `Ctrl+C` en la terminal.

## Endpoints

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/api/mascotas` | Obtiene todas las mascotas. |
| `GET` | `/api/mascotas/:id` | Obtiene una mascota por su ID. |
| `POST` | `/api/mascotas` | Crea una mascota. |
| `PUT` | `/api/mascotas/:id` | Actualiza una mascota existente. |
| `DELETE` | `/api/mascotas/:id` | Elimina una mascota. |

Las solicitudes `POST` y `PUT` deben enviar un cuerpo JSON con los campos obligatorios `nombre`, `especie` y `edad`:

```json
{
	"nombre": "Luna",
	"especie": "Perro",
	"edad": 4
}
```

## Estructura principal

```text
src/
├── index.js                         # Configuración e inicio del servidor
├── controllers/mascotas.controller.js # Lógica del CRUD
└── routes/mascotas.routes.js        # Definición de las rutas
```

## Consideraciones

- Los datos iniciales están definidos en `src/controllers/mascotas.controller.js`.
- No se utiliza una base de datos: las mascotas se almacenan en memoria y los cambios se pierden al reiniciar el servidor.
- Actualmente no hay pruebas automatizadas configuradas en el proyecto.

