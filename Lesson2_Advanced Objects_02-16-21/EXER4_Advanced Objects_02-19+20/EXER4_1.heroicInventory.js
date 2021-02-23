function main(heroArr){

    let allHerosArr = [];   
    
    heroArr.forEach(hero => {
        let heroObj = {};
        let [heroName, heroLevel, heroItems] = hero.split(' / ');
        heroObj.name = heroName;
        heroObj.level = +heroLevel;
        if (heroItems) {
            heroItems = heroItems.split(', ');
            heroObj.items = heroItems; 
        }
        allHerosArr.push(heroObj);
    });

    console.log(JSON.stringify(allHerosArr));
}

main(['Isacc / 25 / Apple, GravityGun','Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
main(['Jake / 1000 / Gauss, HolidayGrenade']);