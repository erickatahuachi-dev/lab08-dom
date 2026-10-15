# Tarea: Mi componente interactivo

## Componente elegido
Registro de notas de estudiantes con cálculo de promedio general automático.

## Version 1: solo DOM
- **Qué se agregó:** Estructura base en HTML y manipulación estática del texto principal y listas en `app.js`.
- **Por qué:** Para verificar que los scripts estén correctamente vinculados y que las funciones de selección respondan antes de incorporar lógica.
- **Qué cambió:** La página muestra un elemento de ejemplo insertado directamente desde JavaScript sin estar escrito originalmente en el archivo HTML.

## Version 2: con eventos
- **Qué se agregó:** Captura de eventos `input` en el cuadro de texto, control de envíos mediante `submit` con `preventDefault()`, y un listener `click` adjuntado a cada elemento dinámico.
- **Por qué:** Para permitir al usuario interactuar dinámicamente con el formulario, evitar recargas de página invasivas y habilitar la eliminación manual de registros.
- **Qué cambió:** El formulario ahora añade elementos a la lista dinámicamente al presionar registrar y los borra de la pantalla individualmente al presionar el botón "Borrar".

## Version 3: con clases y objetos
- **Qué se agregó:** Definición de la clase `Estudiante`, manipulación de instancias a través de un arreglo de objetos y lógica matemática integrada dentro de los métodos del objeto.
- **Por qué:** Para estructurar y encapsular los datos de los estudiantes (nombre, nota, estado de aprobación) de forma profesional y escalable en lugar de depender únicamente de cadenas de texto crudas del DOM.
- **Qué cambió:** Cada línea de la lista muestra de forma automática si el estudiante está "Aprobado" o "Desaprobado" según su nota, y el promedio general de la parte inferior se recalcula matemáticamente con precisión en tiempo real al agregar o borrar registros.

## Donde uso DOM, eventos y objetos

| Pieza | Línea de tu código donde aparece | Para qué sirve |
|-------|----------------------------------|----------------|
| **DOM** | `document.createElement("li")` y `listaEstudiantes.appendChild(li)` | Crea nodos directamente en memoria y los inserta visualmente en la estructura del árbol de la página. |
| **Evento** | `formEstudiante.addEventListener("submit", ...)` | Escucha el envío del formulario, frena la recarga por defecto mediante `preventDefault()` e inicia la lógica de validación y guardado. |
| **Objeto** | `const nuevoEstudiante = new Estudiante(nombreVal, notaVal);` | Instancia un nuevo objeto concreto a partir del molde de la clase `Estudiante` para procesar sus métodos internos. |

## Pruebas realizadas

| Acción | Resultado esperado | Resultado obtenido | ¿Cumple? (Sí / No) |
|--------|---------------------|--------------------|--------------------|
| Dejar el nombre vacío y pulsar Registrar | Mostrar mensaje de error visible indicando completar campos sin alert | Aparece mensaje en rojo: "Error: Complete los campos..." | Sí |
| Digitar nota mayor a 20 o negativa | Bloquear registro y notificar el error en la interfaz | Muestra error de campos y no altera la lista | Sí |
| Registrar "Carlos" con nota 15.0 y "Ana" con nota 11.0 | Lista ambos estudiantes imprimiendo su estado en pantalla ("Aprobado" y "Desaprobado") y promedio total en 13.0 | Se añaden correctamente a la lista con sus estados y el promedio se establece en 13.0 | Sí |
| Registrar "Luis" con una nota de 10.0 consecutivamente | Agregar el elemento y bajar el promedio general de la sección de manera proporcional | El promedio general baja a 12.0 automáticamente | Sí |
| Pulsar el botón "Borrar" en el registro de "Luis" | Remover la fila del alumno visualmente de la lista y subir el promedio general nuevamente a 13.0 | El elemento desaparece por completo y el promedio se recalcula de inmediato en 13.0 | Sí |

## Por que diseñé así mi clase
Diseñé la clase `Estudiante` con los atributos `nombre` y `nota` porque representan la información nuclear indivisible que caracteriza a un alumno en un entorno de calificaciones. Añadí el método `obtenerCondicion()` para centralizar la regla de negocio de aprobaciones en un único lugar del código, y el método `formatoLinea()` para estandarizar la representación visual en texto que el DOM requerirá consumir posteriormente, evitando duplicar código repetitivo fuera del objeto.
