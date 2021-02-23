function main(startNum, endNum) {

    startNum = +startNum;
    endNum = +endNum;
    let sum = 0;
    
    for(let i = startNum; i <= endNum; i++){
        sum += i;
    }
    
    console.log(sum);
}

main('1', '5');
main('-8', '20');