addListeners();

let chosenElement = null;
let computerChosenElement = null;
let playerScore = 0;
let computerScore = 0;
const elements = ["rock", "paper", "scissors"];
/* Message format:
 * key: playerChoice_computerChoice
 * value: message to display
 */

//prettier-ignore
const messages = {
	rock_paper:				 "You lose",
	rock_scissors:     "You win!",
	rock_rock:				 "Tie",
	paper_scissors:		 "You lose!",
	paper_rock:				 "You win!",
	paper_paper:			 "Tie",
	scissors_rock:		 "You lose!",
	scissors_paper:		 "You win!",
	scissors_scissors: "Tie",
};

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
  const randomIndex = Math.floor(Math.random() * 3);
  const chosen = elements[randomIndex];
  return document.querySelector("." + chosen);
}
