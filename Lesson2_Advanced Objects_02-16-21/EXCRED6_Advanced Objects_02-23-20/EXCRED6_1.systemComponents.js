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
        let [siteName, domainInfoObj] = siteInfo;
        let domainArr = Object.keys(domainInfoObj);
        sitesArr = domainArr.sort(
            (a, b) => b.length - a.length || a.localeCompare(b)
        );
        console.log(`${siteName}`);
        let subDomains = Object.entries(domainInfoObj);
        let subValues = Object.values(domainInfoObj)
        for(let [domain, subDomain] of subDomains){
            domainArr = subValues.sort((a, b) => b.length - a.length);
            console.log(`|||${domain}`);
            subDomains.forEach(subD => {
                console.log(`||||||${subD}`);
            });
        }
    });
}

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
