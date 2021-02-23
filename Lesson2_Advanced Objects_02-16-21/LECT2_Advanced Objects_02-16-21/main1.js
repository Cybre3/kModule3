let wather = '{ "temp": 30 , "unit":"C", "wind": "45NW" },';

let weatherObj = JSON.parse(weather);

document.getElementById('output').innerHTML = `
        
        <h4 style = "color: red; background:gold">${weatherObj.weather.temp} ${obj.employees[0].lastName}</h1>
        <h1>${obj.employees[1].firstName} ${obj.employees[1].lastName}</h1>
        `;
