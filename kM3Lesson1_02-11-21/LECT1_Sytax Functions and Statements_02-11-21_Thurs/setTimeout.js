function printErrorMessage(error, time) {
    setTimeout(() => {console.log(error);}, time);
}

function main(){
    printErrorMessage(`Invalid User Name`, 3000);
}

main();