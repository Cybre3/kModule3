// function main(num1, num2, num3) {
//     aggregate(() => {
//         return num1 + num2 + num3;   // 7
//     });
//     aggregate(() => {return (1/num1 + 1/num2 + 1/num3);});   // 1.75
//     aggregate(() => {return "" + num1 + num2 + num3;});  // 124

//     function aggregate(calc) {
//         console.log(calc());
//     }
// }
// main(1, 2, 4);

// function aggregateElements(elements) {
//     aggregate(elements, 0, (a, b) => a + b);
//     aggregate(elements, 0, (a, b) => a + 1 / b);
//     aggregate(elements, '', (a, b) => a + b);
//     function aggregate(arr, initVal, func) {
//         let val = initVal;
//         for (let i = 0; i < arr.length; i++) val = func(val, arr[i]);
//         console.log(val);
//     }
// }
// aggregateElements([1, 2, 4]);

function main(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    let sumInverse = arr.reduce((a, b) => a + 1 / b, 0);
    let concat = arr.reduce((a, b) => '' + a + b, '');

    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}
main([1, 2, 4]);
