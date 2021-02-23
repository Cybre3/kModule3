function main(juiceArr) {
    let juiceObj = {};

    let juice = juiceArr.shift();
    while (juiceArr.length !== 0) {
        let [juiceType, quantity] = juice.split(' => ');
        if (!juiceObj.hasOwnProperty(juiceType) && +quantity < 1000) {
            if (juiceArr.length < 2) {
                break;
            } 
            juiceArr.push(juice);
        } else if (!juiceObj.hasOwnProperty(juiceType) && +quantity >= 1000) {
            juiceObj[juiceType] = +quantity;
        } else if (juiceObj.hasOwnProperty(juiceType)) {
            juiceObj[juiceType] += +quantity;
        }
        juice = juiceArr.shift();
    }

    let juiceInventory = Object.entries(juiceObj);
    for (let [juice, bottle] of juiceInventory) {
        console.log(`${juice} => ${Math.floor(bottle / 1000)}`);
    }
}

main([
    'Apple => 200',
    'Kiwi => 1300',
    'Kiwi => 700',
    'Apple => 100',
    'Apple => 250',
    'Apple => 90',
]);
