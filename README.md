# Bot Express TP4

Trabajo Práctico Nº 4 - Diseños y Arquitecturas de Despliegues 1

## Descripción

Este proyecto consiste en un bot desarrollado con Node.js y Express.

El bot recibe un estado del juego en formato JSON mediante `POST /move` y devuelve los movimientos que debe realizar cada ficha del jugador.

La estrategia del bot es determinista y se basa en el número obtenido en el dado.

## Tecnologías utilizadas

* Node.js
* Express
* Nodemon

## Estructura del proyecto

```text
tarea-tp4/
├── fixtures/
│   ├── state1.json
│   └── state2.json
├── src/
│   ├── handler.js
│   ├── server.js
│   └── strategy.js
├── .gitignore
├── package.json
└── package-lock.json
```

## Funcionamiento

El proyecto está separado en tres partes:

### `src/server.js`

Se encarga de iniciar el servidor Express, configurar `express.json()` y definir `POST /move`.

También utiliza la variable de entorno `PORT` para configurar el puerto. Si no se indica, utiliza el puerto `3000`.

### `src/handler.js`

Recibe el estado enviado en la petición mediante `req.body`.

Luego llama a la función `chooseMove(state)` de `strategy.js` y devuelve el resultado en formato JSON.

### `src/strategy.js`

Contiene la estrategia del bot.

La estrategia recorre el tablero y busca las fichas que pertenecen al jugador indicado en el estado.

Una vez encontrada una ficha, se utiliza el valor del dado para decidir hacia dónde se mueve.

Las reglas utilizadas son:

| Valor del dado | Dirección   |
| -------------- | ----------- |
| `1`            | Norte (`N`) |
| `2`            | Este (`E`)  |
| `3`            | Sur (`S`)   |

Por ejemplo, si el jugador tiene una ficha `A1` y el dado es `3`, el resultado será:

```json
{
  "A1": "S"
}
```

Si el jugador tiene dos fichas `B1` y `B2` y el dado es `2`, el resultado será:

```json
{
  "B1": "E",
  "B2": "E"
}
```

## Fixtures

La carpeta `fixtures/` contiene estados de prueba en formato JSON.

### `state1.json`

Tiene como jugador a `A` y el dado tiene valor `3`.

La respuesta esperada es:

```json
{
  "A1": "S"
}
```

### `state2.json`

Tiene como jugador a `B` y el dado tiene valor `2`.

La respuesta esperada es:

```json
{
  "B1": "E",
  "B2": "E"
}
```

## Instalación

Para instalar las dependencias del proyecto:

```bash
npm install
```

## Ejecución

Para iniciar el servidor normalmente:

```bash
npm start
```

Para ejecutar el servidor durante el desarrollo utilizando Nodemon:

```bash
npm run dev
```

El servidor utiliza el puerto `3000` por defecto.

También se puede configurar otro puerto utilizando `PORT`.

Ejemplo:

```bash
PORT=4000 npm start
```

## Pruebas

Para probar el primer fixture:

```bash
curl -X POST http://localhost:3000/move -H "Content-Type: application/json" -d @fixtures/state1.json
```

Resultado esperado:

```json
{
  "A1": "S"
}
```

Para probar el segundo fixture:

```bash
curl -X POST http://localhost:3000/move -H "Content-Type: application/json" -d @fixtures/state2.json
```

Resultado esperado:

```json
{
  "B1": "E",
  "B2": "E"
}
```

## Scripts disponibles

| Comando       | Función                        |
| ------------- | ------------------------------ |
| `npm install` | Instala las dependencias       |
| `npm start`   | Inicia el servidor             |
| `npm run dev` | Inicia el servidor con Nodemon |

## Git

El proyecto utiliza Git para registrar los cambios de forma incremental.

El repositorio contiene commits correspondientes a las distintas etapas del desarrollo del bot.

