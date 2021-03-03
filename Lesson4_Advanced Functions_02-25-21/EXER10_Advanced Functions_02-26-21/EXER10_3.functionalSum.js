// function main(num) {
//     let sum = 0;
//     console.log(sum += num);
//     return function returnSum(num){
//         console.log(sum += num);
//         return returnSum;
//     };
// }

let sum = 0;
let addToSum = num => {
    console.log(sum += num);
    return addToSum;
};

function main(num){
    return addToSum(num);
}

// main(1);
main(1)(6)(-3);