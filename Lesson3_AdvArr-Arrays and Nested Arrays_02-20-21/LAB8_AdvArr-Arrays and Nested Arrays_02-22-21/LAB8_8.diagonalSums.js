function main(arrOfArr) {
    let main = [];
    let secondary = [];
    let index = 0;

    arrOfArr.forEach(arr => {
        main.push(arr[index]);
        arr.reverse();
        secondary.push(arr[index]);
        index++;
    });

    let mainSum = main.reduce((a, c) => a + c);
    let secondarySum = secondary.reduce((a, c) => a + c);
    console.log(`${mainSum} ${secondarySum}`);
}


// function main(matrix) {

//     let diagonal1 = 0;
//     let diagonal2 = 0;

//     for (let row = 0; row < matrix.length; row++) {
//         diagonal1 += matrix[row][row];
//         diagonal2 += matrix[row][matrix.length - row - 1];
//     }

//     console.log(`${diagonal1} ${diagonal2}`);
// }


main([[20, 40], [10, 60]]);
main([[3, 5, 17], [-1, 7, 14],  [1, -8, 89]]);