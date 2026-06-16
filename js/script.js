document.addEventListener("DOMContentLoaded", function () {
    const modoBtn = document.getElementById("modoBtn");
    const rutinaBtn = document.getElementById("rutinaBtn");
    const rutinaResultado = document.getElementById("rutinaResultado");
    const calcularBtn = document.getElementById("calcularBtn");
    const resultadoIMC = document.getElementById("resultadoIMC");
    const formulario = document.getElementById("formulario");
    const limpiarBtn = document.getElementById("limpiarBtn");
    const respuestaFormulario = document.getElementById("respuestaFormulario");
    const mensajeFormulario = document.getElementById("mensajeFormulario");
    const datosFormulario = document.getElementById("datosFormulario");

    modoBtn.addEventListener("click", function () {
        document.body.classList.toggle("modo-oscuro");

        if (document.body.classList.contains("modo-oscuro")) {
            modoBtn.textContent = "Modo claro";
        } else {
            modoBtn.textContent = "Cambiar modo";
        }
    });

    const rutinas = [
        "Rutina 1: 10 sentadillas, 8 flexiones apoyadas, 20 segundos de plancha y 1 minuto de descanso.",
        "Rutina 2: caminar rápido 12 minutos, 15 jumping jacks suaves y estiramientos de piernas.",
        "Rutina 3: 3 rondas de 10 zancadas, 10 abdominales suaves y movilidad de hombros.",
        "Rutina 4: 15 sentadillas, 10 elevaciones de rodilla, 20 segundos de plancha y estiramiento final.",
        "Rutina 5: entrenamiento suave de movilidad durante 10 minutos para espalda, cuello y piernas."
    ];

    rutinaBtn.addEventListener("click", function () {
        const numeroAleatorio = Math.floor(Math.random() * rutinas.length);
        rutinaResultado.textContent = rutinas[numeroAleatorio];
    });

    calcularBtn.addEventListener("click", function () {
        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            resultadoIMC.textContent = "Introduce un peso y una altura válidos.";
            resultadoIMC.className = "resultado error";
            return;
        }

        const imc = peso / (altura * altura);
        let mensaje = "";

        if (imc < 18.5) {
            mensaje = "Estás por debajo del peso recomendado.";
        } else if (imc >= 18.5 && imc < 25) {
            mensaje = "Estás en un rango considerado normal.";
        } else if (imc >= 25 && imc < 30) {
            mensaje = "Estás en un rango de sobrepeso.";
        } else {
            mensaje = "Estás en un rango de obesidad.";
        }

        resultadoIMC.textContent = "Tu IMC aproximado es " + imc.toFixed(2) + ". " + mensaje;
        resultadoIMC.className = "resultado correcto";
    });

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const objetivo = document.getElementById("objetivo").value;
        const nivel = document.getElementById("nivel").value;
        const mensaje = document.getElementById("mensaje").value.trim();

        respuestaFormulario.classList.remove("oculto");
        datosFormulario.innerHTML = "";

        if (nombre === "" || email === "" || objetivo === "" || nivel === "" || mensaje === "") {
            mensajeFormulario.textContent = "Faltan campos por rellenar. Revisa el formulario.";
            mensajeFormulario.className = "error";
            return;
        }

        if (!validarEmail(email)) {
            mensajeFormulario.textContent = "El correo electrónico no tiene un formato válido.";
            mensajeFormulario.className = "error";
            return;
        }

        let recomendacion = obtenerRecomendacion(objetivo, nivel);

        mensajeFormulario.textContent = "Formulario enviado correctamente. Esta sería tu recomendación inicial:";
        mensajeFormulario.className = "correcto";

        datosFormulario.innerHTML = `
            <div class="dato-formulario">
                <strong>Nombre:</strong> ${nombre}
            </div>

            <div class="dato-formulario">
                <strong>Email:</strong> ${email}
            </div>

            <div class="dato-formulario">
                <strong>Objetivo:</strong> ${objetivo}
            </div>

            <div class="dato-formulario">
                <strong>Nivel:</strong> ${nivel}
            </div>

            <div class="dato-formulario">
                <strong>Mensaje recibido:</strong> ${mensaje}
            </div>

            <div class="dato-formulario">
                <strong>Recomendación:</strong> ${recomendacion}
            </div>
        `;

        formulario.reset();
    });

    limpiarBtn.addEventListener("click", function () {
        formulario.reset();
        respuestaFormulario.classList.add("oculto");
        mensajeFormulario.textContent = "";
        datosFormulario.innerHTML = "";
    });

    function validarEmail(email) {
        return email.includes("@") && email.includes(".");
    }

    function obtenerRecomendacion(objetivo, nivel) {
        if (objetivo === "ganar fuerza" && nivel === "principiante") {
            return "Empieza con rutinas de cuerpo completo 2 o 3 días por semana.";
        }

        if (objetivo === "perder grasa") {
            return "Combina cardio suave con ejercicios de fuerza y cuida la constancia.";
        }

        if (objetivo === "mejorar resistencia") {
            return "Empieza caminando rápido o haciendo cardio suave varias veces por semana.";
        }

        if (objetivo === "empezar desde cero") {
            return "Haz sesiones cortas, con ejercicios básicos y descansos suficientes.";
        }

        return "Mantén una rutina equilibrada y aumenta la dificultad poco a poco.";
    }
});
