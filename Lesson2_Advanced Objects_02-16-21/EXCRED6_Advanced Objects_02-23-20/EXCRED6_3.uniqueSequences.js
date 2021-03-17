function main(numsArrs) {
    let newNumsArrs = [];
    let validNums = new Set();
    
    numsArrs.forEach((numArr) => {
        arr = JSON.parse(numArr);
        arr.sort((a, b) => b - a);
        newNumsArrs.push(arr);
    });

    newNumsArrs.sort((a, b) => a.length - b.length);
    
    for (let arr of newNumsArrs) {
        arr = arr.join(', ');
        validNums.add(arr);
    }

    let finalArr = Array.from(validNums);
    finalArr.forEach(arr => console.log(`[${arr}]`));
}

// main([
//     '[-3, -2, -1, 0, 1, 2, 3, 4]',
//     '[10, 1, -17, 0, 2, 13]',
//     '[4, -3, 3, -2, 2, -1, 1, 0]',
// ]);

main([
    '[5,10, 22, 44]',
    '[44, 10, 22.0, 5.00]',
    '[-9, 0, 4, 5]',
    '[2, -8, 4]',
    '[0, -9.0000, 5, 4]',
    '[4, -8, 2]',
]);
