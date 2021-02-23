function main(element) {

    let inputType = typeof(element);
    // let number = Number(element);

    // if(number){
    //     let area = Math.pow(number ** 2) * Math.PI;
    //     console.log(area.toFixed(2));
    // } else {
    //     console.log(`We cannot calculate the circle area, because we receive a string`);
    // }

    if(inputType === 'number'){
        let area = (Number(element) ** 2) * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We cannot calculate the circle area, because we receive a ${inputType}`);
    }
}

main(5);
main('name');