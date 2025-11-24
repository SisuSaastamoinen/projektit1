addListeners();

let player_choice = null;
let computer_choice = null;
let player_score = 0;
let computer_score = 0;
const elements = ["rock", "paper", "scissors"];

const win_msg = win_msg;
const lose_msg = lose_msg;
const tie_msg = "It's a tie!";
/* Message format:
 * key: playerChoice_computerChoice
 * value: message to display
 */

//prettier-ignore
const messages = {
	rock_paper:				 lose_msg,
	rock_scissors:     win_msg,
	rock_rock:				 tie_msg,
	paper_scissors:		 lose_msg,
	paper_rock:				 win_msg,
	paper_paper:			 tie_msg,
	scissors_rock:		 lose_msg,
	scissors_paper:		 win_msg,
	scissors_scissors: tie_msg,
};

function onClick(event) {
  let element = event.target.id;
  player_choice = element.id;
  computer_choice = getComputerChoice();
  const messageKey = `${player_choice}_${computer_choice}`;
  const message = messages[messageKey];
  document.querySelector(".game-result").innerText = message;
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
