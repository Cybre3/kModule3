function drinkCost(totalCost, item) {
    const prices = {
        caffeine: 0.8,
        decaf: 0.9,
        tea: 0.8,
        milk: 0.1,
        sugar: 0.1,
    };

    switch (item) {
        case 'tea':
            return (totalCost += prices[item]);
        case 'caffeine':
            return (totalCost += prices[item]);
        case 'decaf':
            return (totalCost += prices[item]);
        case 'milk':
            return (totalCost += Number(
                (totalCost * +prices[item]).toFixed(1)
            ));
    }

    if (+item && +item > 0) {
        totalCost += prices.sugar;
    }

    return totalCost;
}

function main(ordersArr) {
    let incomeReport = 0;

    ordersArr.forEach((order) => {
        order = order.split(', ');
        const insertedCoins = +order.shift();
        let totalCost = 0;
        order.forEach((item) => {
            totalCost = drinkCost(totalCost, item);
        });

        if (totalCost <= insertedCoins) {
            incomeReport += totalCost;
            console.log(
                `You ordered ${order[0]}. Price: $${totalCost.toFixed(
                    2
                )} Change: $${(insertedCoins - totalCost).toFixed(2)}`
            );
        } else {
            console.log(
                `Not enough money for ${order[0]}. Need $${Math.abs(
                    insertedCoins - totalCost
                ).toFixed(2)} more`
            );
        }
    });

    console.log(`Income Report: $${incomeReport.toFixed(2)}`);
}

main([
    '1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0',
]);
main(['8.00, coffee, decaf, 4', '1.00, tea, 2']);
