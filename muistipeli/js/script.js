var board;
var clickedOnce = false;
createBoard();
console.log("Pelilaudan elementit:");
console.log(Array.from(board.children));

function onClickPicture() {
  console.log("onclick toimii!");
}

function resetGame() {
  console.log("resetGame toimii!")
}

function setGameSize() {
  console.log("setGameSize toimii!");
}

function startGame() {
  console.log("startGame toimii!");
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
