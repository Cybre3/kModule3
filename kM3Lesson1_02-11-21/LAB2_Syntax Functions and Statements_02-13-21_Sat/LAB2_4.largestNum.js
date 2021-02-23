function main(...numArray) {
    numArray.sort((a, b) => a-b);
    console.log(`The largest number is ${numArray.pop()}.`);
    // console.log(`The largest number is ${Math.max(...numArray)}.`);
}

main(5, -3, 16);
main(-3, -5, -22.5);