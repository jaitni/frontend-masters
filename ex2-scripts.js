let calculationRow = document.querySelector(".calculation-row");
const innerContainer = document.querySelector(".inner-container");

innerContainer.addEventListener("click", buttonClick);

function buttonClick(event) {
    if (event.target.innerText === "C") {       // Clearing button
        calculationRow.innerText = "0";
    }
    else if (event.target.innerText === "←"){       // Backspace button
        calculationRow.innerText = calculationRow.innerText.substr(0,calculationRow.innerText.length -1);
    }
    else if (event.target.innerText === "="){       // Evaluation button
        calculationRow.innerText = eval(calculationRow.innerText).toFixed(2);
    }
    else if (["/","+","-","*"].indexOf(event.target.innerText) >= 0) {  // Calculations buttons
        switch (calculationRow.innerText.substr(-1,1)) {        // Prevent user from input two calculations buttons next to each other
            case "/":
            case "+":
            case "-":
            case "*":
                calculationRow.innerText = calculationRow.innerText.substr(0,calculationRow.innerText.length-1);
        }

        calculationRow.innerText += event.target.innerText;
    }
    else {
        if (calculationRow.innerText === "0") {     // Possibility to write more than one number
            calculationRow.innerText = "";
        }
        
        calculationRow.innerText += event.target.innerText;
    }

}