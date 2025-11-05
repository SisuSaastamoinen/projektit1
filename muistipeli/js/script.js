var board;
var clickedOnce = false;
createBoard();
console.log("Pelilaudan elementit:");
console.log(Array.from(board.children));
var gameSizeRows, gameSizeCols;
var running = false;
assignImagesToBoard();

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

function assignImagesToBoard() {
  for (let i = 1, j = 19; i <= 18, j <= 36; i++, j++) {
    const img1 = document.createElement("img");
    img1.src = "../resources/img/monke" + i + ".jpg";
    const img2 = document.createElement("img");
    img2.src = "../resources/img/monke" + i + ".jpg";
    document.getElementById("pic" + i).appendChild(img1);
    document.getElementById("pic" + j).appendChild(img2);
  }
}

function createBoard() {
  let pictureIdAppendix = 1;
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

