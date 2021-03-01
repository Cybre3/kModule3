function main(arr, criteria) {
    // convert arr to arr of objects
    let employeeArr = JSON.parse(arr);

    // get criteria key and value
    let [key, value] = criteria.split('-');
    let matchingEmployees = employeeArr.filter(
        (employee) => employee[key] === value
    );

    // print matching employees
    matchingEmployees.forEach((employee, index) => {
        console.log(
            `${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`
        );
    });
}

main(
    `[{"id":"1","first_name":"Ardine","last_name":"Bassam","email":"abassam0@cnn.com","gender":"Female"}, {"id":"2","first_name":"Kizzee","last_name":"Jost","email":"kjost1@forbes.com","gender":"Female"}, {"id":"3","first_name":"Evanne","last_name":"Maldin","email":"emaldin2@hostgator.com","gender":"Male"}]`,
    'gender-Female'
);
