// Tarea v2: con eventos
const formEstudiante = document.querySelector("#formEstudiante");
const estNombre = document.querySelector("#estNombre");
const estNota = document.querySelector("#estNota");
const listaEstudiantes = document.querySelector("#listaEstudiantes");
const mensajeError = document.querySelector("#mensajeError");

// 1. Evento input: Limpia el error mientras el usuario escribe
estNombre.addEventListener("input", () => {
    mensajeError.textContent = "";
});

// 2. Evento submit: Captura el envío del formulario
formEstudiante.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const nombre = estNombre.value.trim();
    const nota = parseFloat(estNota.value);

    // Validación obligatoria
    if (nombre === "" || isNaN(nota) || nota < 0 || nota > 20) {
        mensajeError.textContent = "Error: Nombre vacío o nota fuera de rango (0-20).";
        mensajeError.className = "error";
        return;
    }

    // Elemento creado con createElement
    const li = document.createElement("li");
    li.textContent = nombre + " - Nota: " + nota.toFixed(1);

    // Botón para borrar creado dinámicamente
    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.className = "borrar-btn";
    
    // 3. Evento click: Elimina el elemento al pulsar borrar
    btnBorrar.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(btnBorrar);
    listaEstudiantes.appendChild(li);

    formEstudiante.reset();
});
