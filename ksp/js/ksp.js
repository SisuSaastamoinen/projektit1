addListeners();

let player_choice = null;
let computer_choice = null;
let player_score = 0;
let computer_score = 0;

function onClick(event) {
  const win_msg = "You win!";
  const lose_msg = "You lose!";
  const tie_msg = "It's a tie!";
  /* NOTE:
   * messages format:
   * key: [player_choice]_[computer_choice]
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
  const element = event.target.id;
  player_choice = element;
  computer_choice = getComputerChoice();
  const messageKey = `${player_choice}_${computer_choice}`;
  const message = messages[messageKey];
  if (message === win_msg) {
    player_score++;
  } else if (message === lose_msg) {
    computer_score++;
  }
  document.querySelector(".player-score").innerHTML =
    `Käyttäjä: ${player_score}`;
  document.querySelector(".computer-score").innerHTML =
    `Tietokone: ${computer_score}`;
  document.querySelector(".game-result").innerHTML = message;
}

function addListeners() {
  document.querySelectorAll(".game-element").forEach((b) => {
    b.addEventListener("click", onClick);
  });
}

function getComputerChoice() {
  const elements = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  const chosen = elements[randomIndex];
  return document.querySelector("#" + chosen).id;
}
