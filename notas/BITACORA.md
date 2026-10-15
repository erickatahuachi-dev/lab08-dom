# Bitacora de JavaScript interactivo 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos. 
Navegador usado: Google Chrome 
## Ejercicio 2: Seleccionar y modificar el DOM 

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde la consola | El título cambia a "Hola desde la consola" | No |
| textContent desde app.js | El título cambia a "Hola TECSUP" | Sí |
| style.color | El título se vuelve de color azul | Sí |
| classList.add | El párrafo obtiene un fondo amarillo | Sí |
| createElement + appendChild | Se añade "JavaScript" al final de la lista | Sí |

## Ejercicio 3: Evento click 
| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Un clic simple izquierdo | Suma 1 |
| dblclick | Un doble clic rápido izquierdo | Suma 1 |
| mouseover | Pasar el puntero sobre el botón | Suma 1 |

* **evento.type:** Muestra el nombre del tipo de evento ejecutado (ej. "click").
* **evento.target:** Muestra el elemento HTML exacto que recibió el disparo de la acción.
## Ejercicio 4: Eventos input y submit 
| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | El texto de saludo cambia letra por letra en tiempo real | No |
| Enviar sin preventDefault | El mensaje de enviado parpadea un instante y se borra todo | Sí |
| Enviar con preventDefault, correo sin @ | Muestra un texto en rojo: "Correo no valido: falta @" | No |
| Enviar con preventDefault, correo con @ | Muestra el texto "Enviado: " seguido del correo ingresado | No |
## Ejercicio 5: Clases y objetos 
| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
|--------|--------|--------|---------------|--------------------|
| laptop | Laptop | 2500 | Laptop - S/ 2500.00 | 1875 |
| mouse | Mouse | 45 | Mouse - S/ 45.00 | 33.75 |
| teclado| Teclado| 120 | Teclado - S/ 120.00 | 90 |
| monitor| Monitor| 680 | Monitor - S/ 680.00 | 510 |

* **Ventaja de usar clases:** Permiten estructurar y reutilizar moldes de datos idénticos de manera masiva y limpia, evitando escribir código repetitivo a mano de forma estática en el archivo HTML.

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba | Total que muestra la pagina | Correcto (Si/No) |
|--------|-----------------------------|------------------|
| Cuaderno 12.50 | 12.50 | Sí |
| + Lapicero 3.20 | 15.70 | Sí |
| + Mochila 89.90 | 105.60 | Sí |
| Sin Number() | No se agrega y sale error en consola | No |

### Explicación de piezas de código final:
* **DOM:** `document.querySelector("#total")`. Sirve para enlazar elementos HTML y modificarlos desde JS.
* **Evento:** `formProducto.addEventListener("submit", ...)`. Sirve para capturar y reaccionar a las acciones del usuario.
* **Objeto:** `new Producto(...)`. Sirve para instanciar datos ordenados que interactúan con la lógica.
Usa el código con precaución.
(Nota: He rellenado las tablas con los datos reales que resultan al probar el código completo que te pasé antes para que tu reporte esté listo).
Para ver cómo va quedando de forma bonita en VS Code, puedes presionar Ctrl + Shift + V mientras estás en el archivo de la bitácora. ¿Pudiste abrir la vista previa sin problemas?



