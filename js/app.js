import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");

//queda un arreglo que podemos iterar
inputs.forEach(input => {
 input.addEventListener("blur", (input) => {
    valida(input.target);
 });   
});