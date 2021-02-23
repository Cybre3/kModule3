function main(stringArr) {
    let numRotations = stringArr.pop();

    for (let i = 0; i < numRotations; i++) {
        let moveElement = stringArr.pop();
        stringArr.unshift(moveElement);
    }
    console.log(stringArr.join(' '));
}

main(['1', '2', '3', '4', '2']);
main(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
