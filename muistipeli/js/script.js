var board;
var clickedOnce = false;
createBoard();
console.log("Pelilaudan elementit:");
console.log(Array.from(board.children));
let gameSizeRows, gameSizeCols;
let running = false;

function onClickPicture() {
  console.log("onclick toimii!");
}

function resetGame() {
  console.log("resetGame toimii!")
}

function setGameSize() {
  let sizes = document.getElementById("sizeSelect").value.split("x");
  gameSizeRows = parseInt(sizes[0]);
  gameSizeCols = parseInt(sizes[1]);
}

function startGame() {
  if (running) {
    alert("Game already running! Please reset before starting a new game.");
    return;
  }
  running = true;
}

function createBoard() {
  /*TODO: 
  * lataa kuvat netistä, lyö ne listaan ja sekoita,
  * jotta ne saadaan elementteihin,
  * joudutaan tod.näk laittamaan ne oikean kokoisiksi ensin,
  * tiedostopolku on "../resources/img/monkeXX.jpg"
  * */
  let pictureIdAppendix = 0;
  let pictures = [];
  for (let i = 1; i <= 6; i++) {
    let newTr = document.createElement("tr");
    newTr.setAttribute("id", "row" + i);
    for (let j = 1; j <= 6; j++) {
      let newTd = document.createElement("td");
      newTd.setAttribute("id", "pic" + pictureIdAppendix);
      newTd.onclick = onClickPicture;
      newTr.appendChild(newTd);
      pictureIdAppendix++;
    }
    let boardContainer = document.getElementById("boardContainer");
    boardContainer.appendChild(newTr);
    board = boardContainer;
  }
}
