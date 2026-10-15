// Tarea v1: Estructura del componente y DOM
const titulo = document.querySelector("h1");
titulo.textContent = "Sistema de Notas Tecsup";

const lista = document.querySelector("#listaEstudiantes");
const itemEjemplo = document.createElement("li");
itemEjemplo.textContent = "Alumno Ejemplo - Nota: 15.0";
lista.appendChild(itemEjemplo);
