var created = false;
var gameSizeRows, gameSizeCols;
var running = false;
var guesses = 0;
var previousImg = null;
var clickedImg = null;
var clickedContainer = null;
var previousContainer = null;
var processing = false;
var timerInterval = null;
var startTime = null;

function onClickPicture() {
  if (!running) return;
  if (processing) return;
  if (this === previousContainer) return;
  if (!previousImg) {
    previousContainer = this;
    previousImg = this.querySelector("img");
    previousImg.style.display = "inline";
    return;
  } else {
    clickedContainer = this;
    clickedImg = this.querySelector("img");
    clickedImg.style.display = "inline";
    if (previousImg.src === clickedImg.src) {
      previousContainer.removeEventListener("click", onClickPicture);
      clickedContainer.removeEventListener("click", onClickPicture);
      resetState();
    } else {
      processing = true;
      setTimeout(() => {
        previousImg.style.display = "none";
        clickedImg.style.display = "none";
        resetState();
      }, 1000);
    }
    guesses++;
    document.querySelector("#arvaukset").innerText =
      `Arvausten määrä: ${guesses}`;
  }
}

function resetState() {
  processing = false;
  previousImg = null;
  clickedImg = null;
  previousContainer = null;
  clickedContainer = null;
}

function resetGame() {
  stopTimer();
  created = false;
  running = false;
  guesses = 0;
  board = [];
  document.querySelectorAll(".gridCell").forEach((e) => e.remove());
}

function setGameSize() {
  let sizes = document.getElementById("sizeSelect").value.split("x");
  gameSizeRows = parseInt(sizes[0]);
  gameSizeCols = parseInt(sizes[1]);
  createBoard();
}

function startGame() {
  if (running) {
    alert("Game already running! Please reset before starting a new game.");
    return;
  }
  startTime = Date.now();
  timerInterval = setInterval(gameTimer, 10);
  running = true;
}

function shuffleNames(nameList) {
  for (let i = nameList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nameList[i], nameList[j]] = [nameList[j], nameList[i]];
  }
  return nameList;
}

function gameTimer() {
  const elapsed = Date.now() - startTime;
  const minutes = Math.floor(elapsed / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);
  const centiseconds = Math.floor((elapsed % 1000) / 10);
  document.getElementById("aika").innerHTML =
    `Aika: ${minutes}:${seconds.toString().padStart(2, "0")}:${centiseconds.toString().padStart(2, "0")}`;
}

function stopTimer() {
  clearInterval(timerInterval);
  document.getElementById("aika").innerHTML = "00:00:00";
}

function createBoard() {
  if (created) {
    return;
  }
  let filenames = [];
  let gridSize = (gameSizeRows * gameSizeCols) / 2;

  for (let i = 1; i <= gridSize; i++) {
    filenames.push("dev" + i + ".jpg");
    filenames.push("dev" + i + ".jpg");
  }

  filenames = shuffleNames(filenames);

  let filenameSuffixIdx = 0;

  const board = document.getElementById("boardContainer");
  board.style.gridTemplateRows = `repeat(${gameSizeRows}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${gameSizeCols}, 1fr)`;
  board.innerHTML = "";

  for (let i = 1; i <= gameSizeCols * gameSizeRows; i++) {
    let gridCell = document.createElement("div");
    gridCell.style.backgroundImage =
      "url(./resources/img/dev_icons/devdefault.jpg)";
    gridCell.id = "pic" + i;
    gridCell.className = "gridCell";
    gridCell.addEventListener("click", onClickPicture);

    let img = document.createElement("img");
    img.src = "./resources/img/dev_icons/" + filenames[filenameSuffixIdx];
    img.id = filenames[filenameSuffixIdx];
    img.style.display = "none";

    console.log(filenameSuffixIdx);
    gridCell.appendChild(img);
    board.appendChild(gridCell);
    filenameSuffixIdx++;
  }
  board.width = gameSizeRows * 100 + gameSizeRows * 6 + "px";
  board.height = gameSizeCols * 100 + gameSizeCols * 6 + "px";
  created = true;
}
