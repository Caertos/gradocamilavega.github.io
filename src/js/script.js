const graduationDate = new Date("Sep 4, 2024 00:00:00").getTime();

const interval = setInterval(function() {

    const now = new Date().getTime();

    const timeRemaining = graduationDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Mostrar los valores en el HTML
    document.getElementById("dias").innerText = days;
    document.getElementById("horas").innerText = hours;
    document.getElementById("minutos").innerText = minutes;
    document.getElementById("segundos").innerText = seconds;

    if (timeRemaining < 0) {
        clearInterval(interval);
        document.getElementById("dias").innerText = "00";
        document.getElementById("horas").innerText = "00";
        document.getElementById("minutos").innerText = "00";
        document.getElementById("segundos").innerText = "00";
        document.getElementById("mensaje").innerText = "¡Felicidades por tu logro!";

    }

}, 1000);
