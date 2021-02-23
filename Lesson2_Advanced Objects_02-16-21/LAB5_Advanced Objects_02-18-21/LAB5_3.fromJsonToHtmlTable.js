function main(json) {
    let arr = JSON.parse(json);
    let keys = Object.keys(arr[0]);

    let output = '<table>\n';
    output += '  <tr>';
    keys.forEach((key) => {
        output += `<th>${key}</th>`;
    });

    output += `</tr>\n`;

    arr.forEach((el) => {
        output += `  <tr>`;
        let values = Object.values(el);
        values.forEach((value) => {
            if (typeof(value) === 'string') {
               value = encodeURIComponent(value);
            }
            output += `<td>${value}</td>`;
        });
        output += '</tr>\n';
    });
    output += '</table>';

    console.log(output);
}

main([
    '[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]',
]);
main([
    '[{"Name":"Peter<div>-a","Age":20,"City":"Sydney"},{"Name":"George","Age":18,"City":"Perth"},{"Name":"Angel","Age":18,"City":"Melbourne"}]',
]);
