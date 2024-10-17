
const displayText = document.getElementById("display")

let display = '';

const operators = ['+', '-', 'x', '÷', '%', '+/-', '.']

function addToDisplay(value) {

    // Operator on empty calculator, or the last entry was an operator
    if ((display.length == 0 && operators.includes(value)) || isOperator(value) && operators.includes(display[display.length - 1])) {
        console.log("cant have 2 operators")
        return;
    }
    else if (value == 'AC') {
        console.log("clear")
        display = [];
        updateDisplay();
        return;
    }
    else if (value == '+/-') {
        display[0] == '-' ? display = display.substring(1) : display = '-' + display;
        updateDisplay();
        return;
    }
    else if (display == '0') {
        if (isOperator(value)) {
            display += value;
            updateDisplay();
            return;
        }
        else {
            display = value
            updateDisplay();
            return;
        }
    }
    else if (value == '=') {
        display = display.replace(/x/g, '*').replace(/÷/g, '/');
        let value;
        try {
            value = math.evaluate(display);
        } catch (error) {
            displayText.textContent = 'Error';
            return;
        }
        displayText.textContent = value;
        display = value;
        return;
    }

    display += value

    updateDisplay();
}

function updateDisplay() {
    display.length == 0 ? displayText.textContent = "0" : displayText.textContent = display;
}

function isOperator(value) {
    return operators.includes(value)
}