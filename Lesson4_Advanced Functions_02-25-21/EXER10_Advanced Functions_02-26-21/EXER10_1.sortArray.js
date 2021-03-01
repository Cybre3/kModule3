function main(numArr, command) {   
    switch(command){
        case 'asc': console.log(numArr.sort((a, b) => a - b));
        break;
        case 'desc': console.log(numArr.sort((a, b) => b - a));
        break;
    }
}

main([14, 7, 17, 6, 8], 'asc');
main([14, 7, 17, 6, 8], 'desc');