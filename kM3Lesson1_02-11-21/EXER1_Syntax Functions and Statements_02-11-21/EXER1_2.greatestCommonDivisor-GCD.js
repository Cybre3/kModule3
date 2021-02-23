function main(num1, num2) {
    let divisors = [1, 2, 3, 4, 5, 6, 7, 8, 9, num1, num2];

    let gcd = Math.max(
        ...divisors.filter(
            (divisor) => num1 % divisor === 0 && num2 % divisor === 0
        )
    );
    console.log(gcd);
}

main(15, 5);
main(2154, 458);
