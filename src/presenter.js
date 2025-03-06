import sumar from "./sumador";

const first = document.querySelector("#primer-puntaje");
const second = document.querySelector("#segundo-puntaje");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + lovelove(firstNumber, secondNumber) + "</p>";
});
