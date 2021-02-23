function main(commandArr) {
    const [startNum, ...commands] = commandArr;
    let num = +startNum;
    
    commands.forEach(command => {
        num = operation(num, command);
        console.log(num);
    });
}

function operation(num, command){
    switch(command){
        case 'chop': return num / 2;
        case 'dice': return Math.sqrt(num);
        case 'spice': return num + 1;
        case 'bake': return num * 3;
        case 'fillet': return (num * 0.80).toFixed(1);
    }
}

main(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
main(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);