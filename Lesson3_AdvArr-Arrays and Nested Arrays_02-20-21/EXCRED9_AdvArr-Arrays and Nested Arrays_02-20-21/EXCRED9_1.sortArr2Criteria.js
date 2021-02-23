function main(stringArr) {
    console.log(stringArr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n'));
}

main(['alpha', 'beta',  'gamma']);
main(['Isacc', 'Theodor',  'Jack',  'Harrison', 'George']);
main(['test', 'Deny',  'omen',  'Default']);