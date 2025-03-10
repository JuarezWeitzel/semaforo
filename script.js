function redLight() {
    red.classList.add("red-light");
    yellow.classList.remove("yellow-light");
    green.classList.remove("green-light");

    // Após 5 segundos, muda para o verde
    setTimeout(greenLight, 5000);
}

function yellowLight() {
    red.classList.remove("red-light");
    yellow.classList.add("yellow-light");
    green.classList.remove("green-light");

    // Após 2 segundos, muda para o vermelho
    setTimeout(redLight, 2000);
}

function greenLight() {
    red.classList.remove("red-light");
    yellow.classList.remove("yellow-light");
    green.classList.add("green-light");

    // Após 5 segundos, muda para o amarelo
    setTimeout(yellowLight, 5000);
}

// Inicia o ciclo com o vermelho
redLight();