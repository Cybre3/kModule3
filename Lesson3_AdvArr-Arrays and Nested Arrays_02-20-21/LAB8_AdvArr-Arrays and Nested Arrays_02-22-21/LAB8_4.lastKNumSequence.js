function main(finalLength, elementsToAdd) {

    let output = [1];

    for(let i = 1; i < finalLength; i++){
        let slicedArr = output.slice(Math.max(output.length - elementsToAdd, 0));
        let sum = slicedArr.reduce((a, b) => a + b);
        output.push(sum);
    }

    console.log(output.join(' '));
}

main(6, 3);