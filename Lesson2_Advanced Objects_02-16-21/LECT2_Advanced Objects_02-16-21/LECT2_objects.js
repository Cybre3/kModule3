"use strict";

let product = {
    name: 'Chiar',
    price: 50,
    salePercentage: 50,
    salePrice: function(taxes) {
        return this.price * (1 - (this.salePercentage / 100)) + taxes;
    },
    dimensions: {
        height: 30,
        width: 45,
        length: 20,
        calcArea: function() {
            return this.height * this.width * this.length;
        }
    }
};

console.log(product.dimensions.calcArea()); // 27000

delete product.dimensions;
console.log(product);