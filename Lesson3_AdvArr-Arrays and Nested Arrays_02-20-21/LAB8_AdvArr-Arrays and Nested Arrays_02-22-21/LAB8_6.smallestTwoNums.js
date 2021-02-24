function main(numsArr) {

    let [num1, num2] = numsArr.sort((a, b) => a - b);
    console.log(`${num1} ${num2}`);
}

main([30, 15, 50, 5]);
main([3, 0, 10, 4, 7, 3]);