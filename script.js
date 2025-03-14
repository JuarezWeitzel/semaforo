// Verifica em qual página o script está sendo executado
const currentPage = window.location.pathname.split("/").pop();

// Código para o Painel de Controle
if (currentPage === "panelControl.html") {
    document.getElementById('time-control-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Captura os valores dos campos de entrada
        const redTime = parseInt(document.getElementById('redTime').value);
        const yellowTime = parseInt(document.getElementById('yellowTime').value);
        const greenTime = parseInt(document.getElementById('greenTime').value);

        // Salva os tempos no localStorage
        localStorage.setItem('redTime', redTime);
        localStorage.setItem('yellowTime', yellowTime);
        localStorage.setItem('greenTime', greenTime);

        // Redireciona para index.html
        window.location.href = "index.html";
    });
}

// Código para o Semáforo (index.html)
if (currentPage === "index.html") {
    let interval;
    let redTime = parseInt(localStorage.getItem('redTime')) || 10; // Valor padrão
    let yellowTime = parseInt(localStorage.getItem('yellowTime')) || 3; // Valor padrão
    let greenTime = parseInt(localStorage.getItem('greenTime')) || 15; // Valor padrão

    // Seleciona os elementos do semáforo
    const red = document.getElementById('red');
    const yellow = document.getElementById('yellow');
    const green = document.getElementById('green');

    function startCounter(element, seconds, callback) {
        let remainingTime = seconds;
        let counter = element.querySelector(".counter");
        counter.textContent = remainingTime;

        interval = setInterval(() => {
            remainingTime--;
            counter.textContent = remainingTime;

            if (remainingTime <= 0) {
                clearInterval(interval);
                counter.textContent = "";
                callback();
            }
        }, 1000);
    }

    function redLight() {
        red.classList.add("red-light");
        yellow.classList.remove("yellow-light");
        green.classList.remove("green-light");

        // Contador no vermelho
        startCounter(red, redTime, greenLight);
    }

    function yellowLight() {
        red.classList.remove("red-light");
        yellow.classList.add("yellow-light");
        green.classList.remove("green-light");

        // Contador no amarelo
        startCounter(yellow, yellowTime, redLight);
    }

    function greenLight() {
        red.classList.remove("red-light");
        yellow.classList.remove("yellow-light");
        green.classList.add("green-light");

        // Contador no verde
        startCounter(green, greenTime, yellowLight);
    }

    // Inicia o semáforo com os valores padrão ou salvos
    redLight();
}