class Car {
    constructor(brand) {
        this.brand = brand;
    }

    showBrand() {
        return `The car brand ${this.brand}`;
    }
}

class Model extends Car{
    constructor(brand, model){
        super(brand); // super - same as copied
        this.model = model;
    }

    showModel() {
        return `This model is ${this.brand} - ${this.model}`;
    }
}

const carmodel = new Model('BMW');
console.log(carmodel);