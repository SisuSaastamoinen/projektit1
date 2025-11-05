let board = [];
createBoard();

function onClickPicture() {
  console.log("onclick toimii!")
}

function createBoard() {
  /*TODO: 
  * lataa kuvat, lyö ne listaan ja sekoita,
  * jotta ne saadaan elementteihin
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
    document.getElementById("boardContainer").appendChild(newTr);
  }
}
