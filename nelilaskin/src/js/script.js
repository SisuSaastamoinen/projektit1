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

function parseExpression(event) {
    console.log(event.target.value);
    let calculatorContainer = document.getElementById("calculatorContainer");
    const input = classifyInput(event.target.value);
    if (input.value === '=') {
        
        return;
    }
    calculatorContainer.innerHTML += input.value;
}

function classifyInput(input) {
    const operators = ['+','-','*','/','%','='];
    if (!isNaN(input)) {
        return new numberInput(input);
    } else if (operators.includes(input)) {
        return new operatorInput(input);
    } else {
        return new editingInput(input)  ;
    }
}

class numberInput {
    constructor(value) {
        this.value = value;
    }   
}

class operatorInput {
    constructor(value) {
        this.value = value;
    }
}

class editingInput {
    constructor(value) {
        this.value = value;
    }   
}