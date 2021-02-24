function main(matrix) {
    let count = 0;
    for (let arr1 in matrix) {
        for (let el in matrix[arr1]) {
            if (matrix[+arr1 + 1] && matrix[arr1][el] === matrix[+arr1 + 1][el]) {
                count++;
            }
        }
    }
    console.log(count);
}

main([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4'],
]);
main([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5'],
]);
