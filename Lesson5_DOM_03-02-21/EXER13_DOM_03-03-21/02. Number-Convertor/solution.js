function solve() {
    const selectOptions = document.getElementById('selectMenuTo');
    const option1 = document.getElementById('selectMenuTo').firstElementChild;
    
    option1.setAttribute('value', 'binary');
    option1.innerText = 'Binary';
    
    const ceateOption2 = document.createElement('option');
    selectOptions.appendChild(ceateOption2);
    
    const option2 = selectOptions.firstElementChild.nextElementSibling;
    option2.setAttribute('value', 'hexadecimal');
    option2.innerText = 'Hexadecimal';

    const button = document.getElementById('selectMenuTo').nextElementSibling;
    const resultBox = document.getElementById('result');

    const hexConvert = {
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F'
    };

    function hexadecimal (number) {
        let tempNum = number;
        let hexadecimal = [];
        for (let i = 0; tempNum > 0; i++) {
            let digit = 0;
            digit = tempNum % 16;
            tempNum = Math.floor(tempNum / 16);
            if(digit > 9){
                hexadecimal.push(hexConvert[+digit]);
            } else {
                hexadecimal.push(+digit);
            }
        }
        hexadecimal = hexadecimal.reverse().join('');
        resultBox.setAttribute('value', hexadecimal);
    }

    button.addEventListener('click', () => {
        
        const numberInput = document.getElementById('input').value; 
        const selectedOption = selectOptions.value;
        if(selectedOption === 'binary'){
            
        } else if (selectedOption === 'hexadecimal') {
            hexadecimal(numberInput);
        }
    });
}