function addSum(num) {
    let sum = 0;
    return function returnSum(){
        sum += num;
        console.log(sum);
        return returnSum;
    };
}

main(1);
main(1)(6)(-3);