// Tarea v3: con clases y objetos

// Clase propia con constructor, 2 atributos y 2 métodos obligatorios
class Estudiante {
    constructor(nombre, nota) {
        this.nombre = nombre; // Atributo 1
        this.nota = nota;     // Atributo 2
    }

    // Método 1
    obtenerCondicion() {
        return this.nota >= 13 ? "Aprobado" : "Desaprobado";
    }

    // Método 2
    formatoLinea() {
        return this.nombre + " - Nota: " + this.nota.toFixed(1) + " (" + this.obtenerCondicion() + ")";
    }
}

// Variables globales del sistema
const arregloEstudiantes = [];
const formEstudiante = document.querySelector("#formEstudiante");
const estNombre = document.querySelector("#estNombre");
const estNota = document.querySelector("#estNota");
const listaEstudiantes = document.querySelector("#listaEstudiantes");
const promedioGeneral = document.querySelector("#promedioGeneral");
const mensajeError = document.querySelector("#mensajeError");

// Función para recalcular el promedio general del arreglo de objetos
function actualizarPromedio() {
    if (arregloEstudiantes.length === 0) {
        promedioGeneral.textContent = "0.0";
        return;
    }
    let suma = 0;
    arregloEstudiantes.forEach((est) => {
        suma += est.nota;
    });
    const promedio = suma / arregloEstudiantes.length;
    promedioGeneral.textContent = promedio.toFixed(1);
}

// Evento 1: input
estNombre.addEventListener("input", () => {
    mensajeError.textContent = "";
});

// Evento 2: submit
formEstudiante.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const nombreVal = estNombre.value.trim();
    const notaVal = parseFloat(estNota.value);

    // Validación visible en la página (no alert)
    if (nombreVal === "" || isNaN(notaVal) || notaVal < 0 || notaVal > 20) {
        mensajeError.textContent = "Error: Complete los campos de forma válida (Nota 0-20).";
        mensajeError.className = "error";
        return;
    }

    // Instancia de clase con 'new'
    const nuevoEstudiante = new Estudiante(nombreVal, notaVal);
    arregloEstudiantes.push(nuevoEstudiante);

    // Manipulación del DOM mediante createElement
    const li = document.createElement("li");
    li.textContent = nuevoEstudiante.formatoLinea();

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.className = "borrar-btn";
    
    // Evento 3: click para eliminar
    btnBorrar.addEventListener("click", () => {
        // Remover el objeto del arreglo lógico
        const indice = arregloEstudiantes.indexOf(nuevoEstudiante);
        if (indice > -1) {
            arregloEstudiantes.splice(indice, 1);
        }
        // Remover el nodo visual del DOM
        li.remove();
        actualizarPromedio();
    });

    li.appendChild(btnBorrar);
    listaEstudiantes.appendChild(li);

    actualizarPromedio();
    formEstudiante.reset();
});
