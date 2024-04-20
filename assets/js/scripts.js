// script.js
const fechaFinal = new Date("May 30, 2024 23:59:59").getTime();

const actualizarContador = () => {
    const ahora = new Date().getTime();
    const diferencia = fechaFinal - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias < 10 ? '0' + dias : dias;
    document.getElementById("horas").textContent = horas < 10 ? '0' + horas : horas;
    document.getElementById("minutos").textContent = minutos < 10 ? '0' + minutos : minutos;
    document.getElementById("segundos").textContent = segundos < 10 ? '0' + segundos : segundos;

    if (diferencia < 0) {
        clearInterval(x);
        document.getElementById("contador").innerHTML = "¡El sitio ya está en línea!";
    }
};

// Actualizar el contador cada 1 segundo
const x = setInterval(actualizarContador, 1000);
