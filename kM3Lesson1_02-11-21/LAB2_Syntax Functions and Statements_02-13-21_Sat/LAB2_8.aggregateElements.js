function main(numsArr) {
    // Solve for sum
    console.log(solve(numsArr, 0, (a, b) => a + b));
    // solve for sum inverse
    console.log(solve(numsArr, 0, (a, b) => a + 1 / b).toFixed(4));
    // solve for concatination
    console.log(solve(numsArr, '', (a, b) => a + b));
}

function solve(nums, initialVal, func) {
    let result = initialVal;

    nums.forEach(num => {
        result = func(result, num);
    });
    return result;
}

main([1, 2, 3]);
main([2, 4, 8, 16]);
