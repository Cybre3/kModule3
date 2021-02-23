function main(numsArr) {

    let sumRow = 0;
    let sumColumn = 0;

    numsArr.forEach(num => sumRow += num.reduce((a, b) => a + b, 0));
    console.log(sumRow);

    // if(sumRow === sumColumn){
    //     console.log(`true`);
    // } else {
    //     console.log(`false`);
    // }
}

main([[4, 5, 6], [6, 5, 4],  [5, 5, 5]]);
main([[11, 32, 45], [21, 0, 1],  [21, 1, 1]]);
main([[1, 0, 0], [0, 0, 1],  [0, 1, 0]]);