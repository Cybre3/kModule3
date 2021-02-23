function main(num1, num2, operator) {
    console.log(operation(num1, num2, operator));
}

function operation(num1, num2, opSign) {
    switch(opSign){
        case '+':
            return +num1 + +num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
        case '%':
            return num1 % num2;
        case '**':
            return num1 ** num2;
        default:
            return `Error`;
    }
}

main(5, 6, '+');
main(3, 5.5, '*');