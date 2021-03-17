function main(compArr) {
    let systemObj = {};

    compArr.forEach((comp) => {
        let [systemName, compName, subcompName] = comp.split(' | ');

        if (!systemObj[systemName]) {
            systemObj[systemName] = {};
        }

        if (!systemObj[systemName][compName]) {
            systemObj[systemName][compName] = [subcompName];
        } else if (!systemObj[systemName][compName].includes(subcompName)) {
            systemObj[systemName][compName].push(subcompName);
        }
    });

    let sitesArr = Object.entries(systemObj);
    sitesArr.forEach((siteInfo) => {

        let [siteName, componentInfoObj] = siteInfo;
        let componentInfoArr = Object.entries(componentInfoObj);

        componentInfoArr.sort(
            (a, b) => b[0].length - a[0].length || a[0].localeCompare(b[0])
        );

        componentInfoArr.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

        console.log(siteName);

        for (let [component, subCompArr] of componentInfoArr) {
            console.log(`|||${component}`);
            subCompArr.forEach((subComp) => console.log(`||||||${subComp}`));
        }
    });
}

// function main(input) {
//     let systems = new Map()
//     input.forEach(row => {
//         let[system, component, subcomponent] = row.split(' | ')
//         if(!systems.has(system)){
//             systems.set(system, {})
//         }
//         if(!systems.get(system).hasOwnProperty(component)){
//             systems.get(system)[component] = []
//         }
//         systems.get(system)[component].push(subcomponent)
//     })
//     let systemsSortedKeys = [...systems.keys()].sort(numOfCompThenAlphaSort)
//     systemsSortedKeys.forEach(systemName => {
//         console.log(systemName)
//         let system = systems.get(systemName)
//         let componentsSortedKeys = Object.keys(system).sort((a, b) => {
//             return system[b].length - system[a].length
//         })
//         componentsSortedKeys.forEach(component => {
//             console.log(`|||${component}`)
//             system[component].forEach(subcomponent => {
//                 console.log(`||||||${subcomponent}`)
//             })
//         })
//     })
//     function numOfCompThenAlphaSort(a, b) {
//         if(Object.keys(systems.get(a)).length === Object.keys(systems.get(b)).length) {
//             if(a > b) return 1
//             if(a < b) return -1
//         } else {
//             return Object.keys(systems.get(a)).length < Object.keys(systems.get(b)).length
//         }
//     }
// }

// main(['KLLS | Main Site | Home Page','KLLS | Main Site | Login Page','KLLS | Main Site | Register Page','KLLS | Populi Site | Login Page','KLLS | Populi Site | Submission Page','Lambda | CoreA | A23','KLLS | Digital Site | Login Page','Lambda | CoreB | B24','Lambda | CoreA | A24','Lambda | CoreA | A25','Lambda | CoreC | C4','Indice | Session | Default Storage','Indice | Session | Default Security']);
main([
    'Google | Gmail | Inbox',
    'Google | Main Site | Search Results',
    'Yahoo | Main Site | Search Result',
    'Bing | Main Site | Search Result',
    'Yahoo | Yahoo Mail | Inbox',
    'Google | Google Docs | Google Sheet',
    'Google | Google Docs | Google Slides',
]);
