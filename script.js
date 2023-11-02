const counterDisplay = document.querySelector(".counterDisplay");
let value = 0;
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnIncrease = document.getElementById("increase");

function checkValue() {
  counterDisplay.innerHTML = value;
  if (value < 0) {
    counterDisplay.style.color = "red";
  } else if (value > 0) {
    counterDisplay.style.color = "green";
  } else {
    counterDisplay.style.color = "black";
  }
}

function decrease() {
  value -= 1;
  checkValue();
}

function reset() {
  value = 0;
  checkValue();
}

function increase() {
  value += 1;
  checkValue();
}

btnDecrease.addEventListener("click", decrease);
btnReset.addEventListener("click", reset);
btnIncrease.addEventListener("click", increase);

checkValue();
