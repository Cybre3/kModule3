function main(arr) {
    let outputObj = {};

    arr.forEach((townInfo) => {
        let [town, product, price] = townInfo.split(' | ');
        if (!outputObj.hasOwnProperty(product)) {
            outputObj[product] = [];
        }
        let obj = {};
        obj.town = town;
        obj.price = price;
        outputObj[product].push(obj);
    });

    let productsArr = Object.keys(outputObj);
    productsArr.forEach(product => {
        outputObj[product].sort((a, b) => +a.price - +b.price);
    });
    productsArr.forEach(product =>{
        console.log(`${product} -> ${outputObj[product][0].price} (${outputObj[product][0].town})`);
    });
}

main([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sydney | Orange | 3',
    'Sydney | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
]);
