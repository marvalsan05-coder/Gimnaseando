const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", function () {
    document.body.classList.toggle("modo-oscuro");
});

const rutinas = [
    "10 sentadillas, 8 flexiones apoyadas y 20 segundos de plancha.",
    "Caminar rápido 15 minutos y hacer estiramientos suaves.",
    "3 rondas de 10 zancadas, 10 abdominales y 30 segundos de descanso.",
    "20 jumping jacks, 10 sentadillas y movilidad de hombros.",
    "Rutina suave: estiramientos de piernas, espalda y cuello durante 10 minutos."
];

const rutinaBtn = document.getElementById("rutinaBtn");
const rutinaResultado = document.getElementById("rutinaResultado");

rutinaBtn.addEventListener("click", function () {
    const numeroAleatorio = Math.floor(Math.random() * rutinas.length);
    rutinaResultado.textContent = rutinas[numeroAleatorio];
});

const calcularBtn = document.getElementById("calcularBtn");
const resultadoIMC = document.getElementById("resultadoIMC");

calcularBtn.addEventListener("click", function () {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);

        if (imc < 18.5) {
            resultadoIMC.textContent = "Tu IMC aproximado es " + imc.toFixed(2) + ". Estás por debajo del peso recomendado.";
        } else if (imc >= 18.5 && imc < 25) {
            resultadoIMC.textContent = "Tu IMC aproximado es " + imc.toFixed(2) + ". Estás en un rango considerado normal.";
        } else if (imc >= 25 && imc < 30) {
            resultadoIMC.textContent = "Tu IMC aproximado es " + imc.toFixed(2) + ". Estás en un rango de sobrepeso.";
        } else {
            resultadoIMC.textContent = "Tu IMC aproximado es " + imc.toFixed(2) + ". Estás en un rango de obesidad.";
        }
    } else {
        resultadoIMC.textContent = "Introduce un peso y una altura válidos.";
    }
});

const formulario = document.getElementById("formulario");
const mensajeFormulario = document.getElementById("mensajeFormulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        mensajeFormulario.textContent = "Por favor, rellena todos los campos.";
    } else if (!email.includes("@")) {
        mensajeFormulario.textContent = "Introduce un correo electrónico válido.";
    } else {
        mensajeFormulario.textContent = "Gracias, " + nombre + ". Tu mensaje se ha enviado correctamente.";
        formulario.reset();
    }
});