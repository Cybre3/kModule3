function main(employeeJsonData) {
    let output = '<table>\n';
    employeeJsonData.forEach((JsonEmployee) => {
        output += `  <tr>\n`;

        let employeeHtmlData = JSON.parse(JsonEmployee);

        output += `    <td>${employeeHtmlData.name}</td>\n    <td>${employeeHtmlData.position}</td>\n    <td>${employeeHtmlData.salary}</td>\n`;

        output += `  </tr>\n`;
    });
    output += `</table>`;
    console.log(output);
}

main([
    '{"name":"Peter","position":"Manager","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"George","position":"Lecturer","salary":1000}',
]);
