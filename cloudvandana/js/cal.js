let display = document.getElementById('result');
let currentValue = '';

function appendToDisplay(value) {
    currentValue += value;
    display.innerHTML = currentValue;
}

function clearDisplay() {
    currentValue = '';
    display.innerHTML = '0';
}

function calculateResult() {
    try {
        currentValue = eval(currentValue);
        display.innerHTML = currentValue;
    } catch (error) {
        display.innerHTML = 'Error';
    }
}
