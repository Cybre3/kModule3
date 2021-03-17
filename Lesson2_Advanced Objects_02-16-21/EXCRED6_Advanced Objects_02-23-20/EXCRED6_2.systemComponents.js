function main(nameArr) {
    let nameNoDuplicates = Array.from(new Set(nameArr));
    nameNoDuplicates.sort((a, b) => a.length - b.length || a.localeCompare(b));
    nameNoDuplicates.forEach(name => console.log(name));
}

main([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston',
]);
main([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot',
]);
