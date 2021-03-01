function main(carsArr) {
    let carCatalog = {};

    carsArr.forEach(carInfo => {
        let [carBrand, carModel, numCarsProduced] = carInfo.split(' | ');
        if(!carCatalog[carBrand]){
            carCatalog[carBrand] = {};
        }
        if(!carCatalog[carBrand][carModel]){
            carCatalog[carBrand][carModel] = +numCarsProduced;
        } else {
            carCatalog[carBrand][carModel] += +numCarsProduced;
        }
    });

    for (let carBrand in carCatalog) {
        console.log(carBrand);
        for (let carModel in carCatalog[carBrand]) {
            console.log(`###${carModel} -> ${carCatalog[carBrand][carModel]}`);
        }
    }
}

main([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
]);
