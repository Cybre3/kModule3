function main(arr) {

    let towns = {};

    arr.forEach(townStr => {
        let [townName, townPop] = townStr.split(' <-> ');

        if (towns.hasOwnProperty(townName)) {
            towns[townName] += Number(townPop);
        } else {
            towns[townName] = Number(townPop);
        }
    });

    for (let key in towns) {
        console.log(`${key}: ${towns[key]}`);
    }
}

main(['Sydney <-> 1200000','Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);
main(['Istanbul <-> 100000','Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000'] );