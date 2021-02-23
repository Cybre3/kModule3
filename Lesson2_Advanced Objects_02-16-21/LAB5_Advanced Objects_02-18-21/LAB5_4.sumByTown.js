function main(arr) {
    let towns = {};

    for(let i = 0; i < arr.length; i+= 2){

        if (towns[arr[i]] == undefined){
            towns[arr[i]] = Number(arr[i + 1]);
        } else {
            towns[arr[i]] += Number(arr[i + 1]);
        }
    }

    console.log(JSON.stringify(towns));

}

main(['Sydney','20', 'Melbourne', '3', 'Sydney', '5', 'Melbourne', '4']);