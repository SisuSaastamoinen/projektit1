/**
 * ksp.js - Rock Paper Scissors game logic
 *
 * This script implements the core functionality for a Rock Paper Scissors game:
 * - Handles user input via click events on game elements.
 * - Randomly selects the computer's choice.
 * - Determines the outcome (win, lose, tie) and updates scores.
 * - Displays results and score updates in the DOM.
 *
 * Functions:
 * - addListeners(): Attaches click event listeners to game elements.
 * - onClick(event): Handles a player's move, determines the result, updates scores and UI.
 * - getComputerChoice(): Randomly selects and returns the computer's move.
 *
 * Global Variables:
 * - player_choice: Stores the player's current selection.
 * - computer_choice: Stores the computer's current selection.
 * - player_score: Tracks the player's score.
 * - computer_score: Tracks the computer's score.
 */

addListeners();

let player_choice = null;
let computer_choice = null;
let player_score = 0;
let computer_score = 0;

function onClick(event) {
  const win_msg = "Voitit pelin!";
  const lose_msg = "Hävisit pelin!";
  const tie_msg = "Tasapeli!";
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

  const translations = {
    rock: "Kivi",
    paper: "Paperi",
    scissors: "Sakset",
  };
  const element = event.target.id;
  player_choice = element;
  computer_choice = getComputerChoice();
  const messageKey = `${player_choice}_${computer_choice}`;
  const message = messages[messageKey];
  let message_to_display = "";
  if (message === win_msg) {
    message_to_display = `${translations[player_choice]} on voimakkaampi kuin ${translations[computer_choice]}. Sinä voitit!`;
    player_score++;
  } else if (message === lose_msg) {
    message_to_display = `${translations[computer_choice]} on voimakkaampi kuin ${translations[player_choice]}. Sinä hävisit!`;
    computer_score++;
  } else {
    message_to_display = "Tasapeli";
  }
  document.querySelector(".player-score").innerText = player_score + " :";
  document.querySelector(".computer-score").innerText = computer_score;
  console.log(document.querySelector(".game-result"));
  document.querySelector("#game-result").innerText = message_to_display;
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
