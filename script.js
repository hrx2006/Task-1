let display = document.getElementById('screen');

function appendToDisplay(value) {
    display.value += value;
}

function clearScreen() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        
        let result = eval(expression);
        
        if (result % 1 !== 0) {
            result = parseFloat(result.toFixed(10));
        }
        
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearScreen, 1000);
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape') {
        clearScreen();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const mathSymbolsContainer = document.getElementById('mathSymbolsContainer');
    const mathSymbols = ['+', '-', '×', '÷', '=', '≠', '<', '>', '≤', '≥', '√', '∞', '∠', '∏', '∑', '∫', '∂', '∆', '∇', '⊥', '∥', '≅', '≈'];
    
    for (let i = 0; i < 25; i++) {
        const symbol = document.createElement('div');
        symbol.classList.add('mathSymbol');
        symbol.textContent = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
        
        const startPositionX = Math.random() * 100;
        symbol.style.left = `${startPositionX}vw`;
        
        const size = Math.random() * 2 + 1;
        symbol.style.fontSize = `${size}rem`;
        
        const duration = Math.random() * 20 + 10;
        symbol.style.animationDuration = `${duration}s`;
        
        const delay = Math.random() * 5;
        symbol.style.animationDelay = `${delay}s`;
        
        const opacity = Math.random() * 0.2 + 0.05;
        symbol.style.color = `rgba(255, 255, 255, ${opacity})`;
        
        mathSymbolsContainer.appendChild(symbol);
    }
});