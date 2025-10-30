let expression = "";
createButtons();

function createButtons() {
    const buttonLabels = ['AC','C','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0',',','=']
    let buttonContainer = document.getElementById("buttonContainer");
    for (let i=0;i<buttonLabels.length; i++) {
        if (i % 4 == 0) {
            const br = document.createElement("br")
            buttonContainer.appendChild(br);
        }
        let btn = document.createElement('button');
        btn.value = buttonLabels[i];
        btn.innerHTML = buttonLabels[i];
        btn.onclick = (event) => parseExpression(event);
        if (btn.value === '0') {
            btn.className = " zeroButton";
        } else {
            btn.className = "calcButton";
        }
        buttonContainer.appendChild(btn);
    }
}

function evaluateExpression() {
    let result = eval(expression.replaceAll(',', '.'));
    let numberDisplay = document.getElementById("numberDisplay");
    numberDisplay.innerHTML = result.toString().replace('.', ',');
    expression = result.toString().replace('.', ',');
}

function parseExpression(event) {
    console.log(event.target.value);
    let numberDisplay = document.getElementById("numberDisplay");
    const input = event.target.value;
    switch (input) {
        case '=':
            evaluateExpression();
            return;
        case 'AC':
            expression = "";
            numberDisplay.innerHTML = "";
            return;
        case 'C':
            expression = expression.slice(0, -1);
            numberDisplay.innerHTML = numberDisplay.innerHTML.slice(0, -1);
            return;
        default:
            expression += input;
    }
    numberDisplay.innerHTML += input;
}