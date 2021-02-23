function main(stringArr) {
    let calObj = {};

    stringArr.forEach((str, index) => {
        if(index % 2 === 0){
            calObj[str] = stringArr[+index + 1];
        }
    });
    console.log(calObj);
}

main(['Yoghurt', 48, 'Rice', 138, 'Apple', 52]);
main(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);