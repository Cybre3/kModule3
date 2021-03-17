function main(numsArr) {
    let sumsRowsARR = [];
    let sumRow = 0;
    let sumColumn1 = 0;
    let sumColumn2 = 0;
    let sumColumn3 = 0;

    numsArr.forEach((numArr) => {
        sumRow = numArr.reduce((a, b) => a + b, 0);
        console.log(sumRow);
    });
    numsArr.forEach((numArr) => {
        numArr.forEach((num, index) => {
            switch (index) {
                case 0:
                    sumColumn1 += numArr[index];
                    break;
                case 1:
                    sumColumn2 += numArr[index];
                    break;
                case 2:
                    sumColumn3 += numArr[index];
                    break;
            }
        });

        // if(sumRow === sumColumn){
        //     console.log(`true`);
        // } else {
        //     console.log(`false`);
        // }
    });
    console.log(sumColumn1);
    console.log(sumColumn2);
    console.log(sumColumn3);
}

main([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]);
main([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]);
main([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
]);
