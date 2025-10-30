function createButtons() {
    const buttonLabels = ['AC','C','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0',',','=']
    let buttonContainer = document.getElementById("buttonContainer");
    for (let i=0;i<buttonLabels.length; i++) {
        if (i % 3 == 0) {
            buttonContainer.appendChild("<br>");
        }
        let btn = document.createElement('button');
        btn.value = buttonLabels[i];
        btn.innerHTML = buttonLabels[i];
        btn.onclick = parseExpression;
        btn.className = "calcButton";
        buttonContainer.appendChild(btn);
    }
}

function parseExpression(event) {

}