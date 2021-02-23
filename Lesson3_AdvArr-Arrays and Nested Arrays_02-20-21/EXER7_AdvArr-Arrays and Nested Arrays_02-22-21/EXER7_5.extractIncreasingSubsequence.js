function main(numArr) {
    let outputArr = [];
    let biggerNum = 0;

    numArr.forEach((num, index) => {
        if(num === 0 && index === 0){
            outputArr.push(num);
        }
        if(num > biggerNum){
            biggerNum = num;
            outputArr.push(biggerNum);
        }
    });

    console.log(outputArr.join('\n'));
}

main([1, 3, 8, 4, 10, 12, 3, 2, 24]);
main([1, 2, 3, 4]);
main([20, 3, 2, 15, 6, 1]);
