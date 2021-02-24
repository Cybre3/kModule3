function main(numArr) {
    let validNums = numArr.filter((num, index) => index % 2 === 0).join(' ');
    console.log(validNums);
}

main(['20', '30', '40']);
main(['5', '10']);