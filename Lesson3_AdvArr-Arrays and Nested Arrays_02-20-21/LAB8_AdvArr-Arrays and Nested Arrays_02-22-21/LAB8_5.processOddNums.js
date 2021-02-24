function main(numsArr) {

    let output = numsArr.filter((num, index) => index % 2 !== 0);

    console.log(output.map(num => num * 2).reverse().join(' '));
}

main([10, 15, 20, 25]);
main([3, 0, 10, 4, 7, 3]);