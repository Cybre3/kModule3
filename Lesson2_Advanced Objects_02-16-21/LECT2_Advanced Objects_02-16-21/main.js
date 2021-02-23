let text = '{ "employees" : [' +    
        '{ "firstName":"John" , "lastName":"Doe" },' +    
        '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

        let obj = JSON.parse(text);

        document.getElementById('output').innerHTML = `
        
        <h1 style = "color: red; background:gold">${obj.employees[0].firstName} ${obj.employees[0].lastName}</h1>
        <h1>${obj.employees[1].firstName} ${obj.employees[1].lastName}</h1>
        `