function main(numArr) {
    // let first = numArr.shift();
    // let last = numArr.pop();
    // console.log(first + last);
    console.log(+numArr.shift() + +numArr.pop());
}

main(['20', '30', '40']);
main(['5', '10']);