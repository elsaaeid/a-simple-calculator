function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    if (display.value.trim() === '') {
        alert('Please enter a number expression');
        return;
    }
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}