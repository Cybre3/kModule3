function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

// func input is copy of currencyFormatter function to be invoked
function main(func){
    // return function to be stored in dollar formatter variable
    return function (x) {    // see vairable dollarFormatter;
       return func(',', '$', true, x);
    };
}

// 1. call main currency function
let dollarFormatter = main(currencyFormatter);
// 2. dollarFormatter function takes  1 argument
console.log(dollarFormatter(5345)); // see function main
console.log(dollarFormatter(3.1429));
console.log(dollarFormatter(2.709)); 