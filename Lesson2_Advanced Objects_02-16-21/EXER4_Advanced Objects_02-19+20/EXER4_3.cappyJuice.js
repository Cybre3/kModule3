function main(juiceArr) {
    let partialJuiceQty = {};
    let juiceBottles = {};

    juiceArr.forEach(juice => {
        let [juiceType, quantity] = juice.split(' => ');
        if(!partialJuiceQty[juiceType]){
            
        }
        console.log(juiceType, quantity);
    });
}

// main(['Orange => 2000','Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']);

main([
    'Apple => 200',
    'Kiwi => 1300',
    'Kiwi => 700',
    'Apple => 100',
    'Apple => 250',
    'Apple => 90',
]);
