function main(arr) {
    arr.shift();
    let townLocation = [];
    // class City {
    //     constructor(Town, Latitude, Longitude) {
    //         this.Town = Town;
    //         this.Latitude = Latitude;
    //         this.Longitude = Longitude;
    //     }
    // }

    let [nameKey, latKey, longKey] = arr.shift()
    .replace(/[|]\s?/g, '')
    .trim()
    .split(' ');
    arr.forEach((location) => {
        let [Town, Latitude, Longitude] = location
            .replace(/[|]\s?/g, '')
            .trim()
            .split(' ');
        
        // let obj = {}
        //      Town,
        //     Latitude: Number(Number(Latitude).toFixed(2)),
        //     Longitude: Number(Number(Longitude).toFixed(2)),
    
        // townLocation.push(obj);

        // Longitude = Number(Number(Longitude).toFixed(2));
        // Latitude = Number(Number(Latitude).toFixed(2));
        // townLocation.push(new City(Town, Latitude, Longitude));
    });

    let jsonTown = JSON.stringify(townLocation);
    console.log(jsonTown);
}

main([
    '| Town | Latitude | Longitude |',
    '| Melbourne |-37.840935 | 144.946457|',
    '| Beijing | 39.913818 | 116.363625 |',
]);
