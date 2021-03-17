function solve() {

    const expression = document.getElementById('expressionOutput');
    const output = document.getElementById('resultOutput');

    document.addEventListener('click', clickHandler);

    function clickHandler(e){
        let button = e.target;

        if(button.nodeName == 'BUTTON'){
            if(button.value !=='Clear' && button.value !== '=') {
                expression.textContent += button.value;
            } else if (button.value == 'Clear'){
                expression.textContent = '';
                output.textContent = '';
            } else if (button.value === '='){
                let string = expression.textContent;
                // get last digit
                let lastDigit = string[string.length - 1];
                let result;
                if(isNaN(lastDigit) || lastDigit === '.'){
                    result = 'NaN';
                } else {
                    result  = eval(string);
                }
                // show result
                output.textContent = result;
            }
        }
    }
}