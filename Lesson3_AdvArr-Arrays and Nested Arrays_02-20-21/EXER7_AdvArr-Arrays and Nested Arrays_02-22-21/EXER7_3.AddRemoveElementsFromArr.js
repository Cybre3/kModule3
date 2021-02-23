function main(commandArr) {
    let outputArr = [];
    let initialNum = 1;

    commandArr.forEach((command) => {
        switch (command) {
            case 'add':
                outputArr.push(initialNum);
                break;
            case 'remove':
                outputArr.splice(outputArr.indexOf(initialNum), 1);
                break;
        }
        initialNum++;
    });
    if (outputArr.length === 0) {
        console.log(`Empty`);
    } else {
        console.log(outputArr.join('\n'));
    }
}

main(['add', 'add', 'add', 'add']);
main(['add', 'add', 'remove', 'add', 'add']);
main(['remove', 'remove', 'remove']);
