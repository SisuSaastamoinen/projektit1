addListeners();

let player_choice = null;
let computer_choice = null;
let player_score = 0;
let computer_score = 0;
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
  player_choice = element.innerText;
  computer_choice = getComputerChoice();
  const messageKey = `${player_choice}_${computer_choice}`;
  const message = messages[messageKey];
  document.querySelector(".game-result").innerText = message;
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
  return document.querySelector("." + chosen).innerText;
}
