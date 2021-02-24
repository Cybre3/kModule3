function main(arrOfArr) {

    let output = [];
    arrOfArr.forEach(arr => output = output.concat(arr));
    console.log(Math.max(...output));
}

main([[20, 50, 10], [8, 33, 145]]);