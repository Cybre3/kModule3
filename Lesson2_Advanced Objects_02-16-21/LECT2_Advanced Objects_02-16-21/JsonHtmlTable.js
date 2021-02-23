function main(jsonData) {
    // convert from JsonData to object
    let tableData = JSON.parse(jsonData);

    // create output string
    let output = `<table>\n`;
    output += `  <tr><th>Name</th><th>Price</th></tr>\n`;

    tableData.forEach(product => {
        output += `  <tr><td>${product.Name}</td><td>${product.Price}</td></tr>\n`;
    });

    output += `</table>`;
    output = output.replace(/&/g, '&amp;');
    console.log(output);


}

main(`[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]`);