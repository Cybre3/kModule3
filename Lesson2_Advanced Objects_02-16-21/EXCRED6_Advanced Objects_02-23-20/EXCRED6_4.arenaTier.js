function main(gladiatorArr) {
    let gladiatorPool = new Map();

    gladiatorArr.forEach((gladiator) => {
        const [glad1, glad2] = gladiator.split(' vs ');
        const [gladName, technique, skilLvl] = gladiator.split(' -> ');

        if (!gladiatorPool[gladName]) {
            gladiatorPool[gladName] = `${technique} ${skilLvl}`;
        } else if (
            gladiatorPool.hasOwnProperty(gladName) &&
            gladiatorPool[gladName] < skilLvl
        ) {
            gladiatorPool[gladName] = `${technique} ${skilLvl}`;
        }
    });

    console.log(gladiatorPool);
}

main([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar',
]);

main([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar',
]);
