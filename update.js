const resultText = document.getElementById("resultText");

// update
function updateExpression(val) {
    resultText.value += val;
}

// calculate
function calculateExpression() {
    let x = resultText.value;
    resultText.value = math.evaluate(x);
}

// clear
function clearExpression() {
    resultText.value = "";
}