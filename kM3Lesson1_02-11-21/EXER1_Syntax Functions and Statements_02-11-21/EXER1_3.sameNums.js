function main(num) {
    let sameNum = new Set();
    let sum = 0;
    num.toString()
        .split('')
        .forEach((num) => {
            sum += +num;
            sameNum.add(+num);
        });
    let nums = Array.from(sameNum);
    console.log(`${nums.length === 1 ? `true` : 'false'}\n${sum}`);
}

main(2222222);
main(1234);
