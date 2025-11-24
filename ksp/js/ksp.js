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
	kivi_sakset:   "You win!",
	kivi_kivi:		 "You lose!",
	kivi_paperi:	 "It's a tie!",
	paperi_sakset: "It's a tie!",
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
