function main(arr) {
    let text = JSON.parse(arr);
    let output = '<table>\n';
    output += '  <tr><th>name</th><th>score</th></tr>\n';
    
    text.forEach(person => {
            output += `  <tr><td>${person.name}</td><td>${person.score}</td></tr>\n`;    
    });

    output += '</table>';
    output = output.replace(/[&]/g, '&amp;');
    console.log(output);
}

main(['[{"name":"Peter","score":479}, {"name":"George","score":205}]']);
main(['[{"name":"Peter& Kiro",    "score":479    },    {"name":"George, Maria & Viki",     "score":205    }]']);