function count(...arguments) {

    let tallyObj = {};

    arguments.forEach((argument) => {

        let type = typeof argument;
        console.log(`${type}: ${argument}`);
        
        if (!tallyObj[type]) {
            tallyObj[type] = 1;
        } else {
            tallyObj[type]++;
        }
    });
    return tallyObj;
}

function main(...arguments) {

    let entries = Object.entries(count(...arguments));
    entries.sort((a, b) => b[1] - a[1]);

    for (let [type, count] of entries) {
        console.log(`${type} = ${count}`);
    }
}

main(4, true, false);
