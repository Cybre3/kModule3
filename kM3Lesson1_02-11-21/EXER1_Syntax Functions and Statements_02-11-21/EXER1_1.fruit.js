function main(fruitType, weightGrams, pricePerKilo) {
    let fruitPrice = weightGrams / 1000 * pricePerKilo;
    console.log(`I need $${fruitPrice.toFixed(2)} to buy ${(weightGrams / 1000).toFixed(2)} kilograms ${fruitType}.`); 
}

main('orange', 2500, 1.80);
main('apple', 1563, 2.35);