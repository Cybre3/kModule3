let asc = arr => console.log(arr.sort((a, b) => a - b));
let desc = arr => console.log(arr.sort((a, b) => b - a));
function main(numArr, command) {   
    switch(command){
        case 'asc': return asc(numArr);
        case 'desc': return desc(numArr);
    }
}

main([14, 7, 17, 6, 8], 'asc');
main([14, 7, 17, 6, 8], 'desc');