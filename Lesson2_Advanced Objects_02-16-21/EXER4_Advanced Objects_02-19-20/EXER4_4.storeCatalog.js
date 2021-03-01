function main(stringArr) {

    let obj = {};
    stringArr = stringArr.sort((a, b) => a.localeCompare(b));

    stringArr.forEach((item) => {
        let letter = item[0];
        let [product, price] = item.split(' : ');
        if (!obj[letter]) {
            obj[letter] = [];
        }
        if (!obj[letter][product]) {
            obj[letter].push(`${product}: ${price}`);
        }
    });
    
    for (let key in obj) {
        console.log(`${key}`);
        obj[key].forEach((product) => console.log(`  ${product}`));
    }
}

main([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
]);
