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

let player_score = 0;
let computer_score = 0;
const win = 1;
const lose = -1;

function onClick(event) {
  /* NOTE:
   * OUTCOMES format:
   * key: [player_choice]_[computer_choice]
   * value: win (1), lose (-1)
   */
  //prettier-ignore
  const OUTCOMES = {
	rock_paper:				 lose,
	rock_scissors:     win,
	paper_scissors:		 lose,
	paper_rock:				 win,
	scissors_rock:		 lose,
	scissors_paper:		 win,
};
  //prettier-ignore
  const TRANSLATIONS = {
    rock:     "Kivi",
    paper:    "Paperi",
    scissors: "Sakset",
  };
  const player_choice = event.target.id; // rock, paper, or scissors
  const computer_choice = getComputerChoice(); // rock, paper, or scissors
  const outcome_key = `${player_choice}_${computer_choice}`;
  const outcome = OUTCOMES[outcome_key];
  let message_to_display = "";
  if (outcome === win) {
    message_to_display = `${TRANSLATIONS[player_choice]} on voimakkaampi kuin ${TRANSLATIONS[computer_choice]}. Sinä voitit!`;
    player_score++;
  } else if (outcome === lose) {
    message_to_display = `${TRANSLATIONS[computer_choice]} on voimakkaampi kuin ${TRANSLATIONS[player_choice]}. Sinä hävisit!`;
    computer_score++;
  } else {
    message_to_display = "Tasapeli";
  }
  document.querySelector(".player-score").innerText = player_score + " :";
  document.querySelector(".computer-score").innerText = computer_score;
  document.querySelector("#game-result").innerText = message_to_display;
}

function addListeners() {
  document.querySelectorAll(".game-element").forEach((b) => {
    b.addEventListener("click", onClick);
  });
}

function getComputerChoice() {
  const elements = ["rock", "paper", "scissors"];
  const random_index = Math.floor(Math.random() * 3);
  const chosen = elements[random_index];
  return document.querySelector("#" + chosen).id;
}
