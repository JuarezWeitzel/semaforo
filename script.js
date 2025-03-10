let interval;

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
  startCounter(red, 15, greenLight);
}

function yellowLight() {
  red.classList.remove("red-light");
  yellow.classList.add("yellow-light");
  green.classList.remove("green-light");

  // Contador no amarelo
  startCounter(yellow, 4, redLight);
}

function greenLight() {
  red.classList.remove("red-light");
  yellow.classList.remove("yellow-light");
  green.classList.add("green-light");

  // Contador no verde
  startCounter(green, 10, yellowLight);
}

redLight();