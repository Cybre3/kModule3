function main(arr) {
    let result = [];

    arr.forEach(element => element < 0 ? result.unshift(element) : result.push(element));

    console.log(result.join('\n'));
}

main([7, -2, 8, 9]);