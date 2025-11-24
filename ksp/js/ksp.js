addListeners();

let chosenElement = null;
let computerChosenElement = null;
let playerScore = 0;
let computerScore = 0;
let elements = ["rock", "paper", "scissors"];

function onClick(event) {
  let element = event.currentTarget.dataset.element;
  chosenElement = element;
  computerChosenElement = getComputerChoice();
  alert("KSP.js is working!");
}

function addListeners() {
  document.querySelectorAll(".game-element").forEach((b) => {
    b.addEventListener("click", onClick);
  });
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3);
  return elements[randomIndex];
}
