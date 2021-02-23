function main(stringArr) {
    let nthElement = +stringArr.pop();
    for (let i = 0; i < stringArr.length; i += nthElement) {
        console.log(stringArr[i]);
    }
}

main(['5', '20',  '31',  '4',  '20',  '2']);