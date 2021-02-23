function main(string) {

    let pattern = /[^!\s,?]+/g;
    console.log(string.toUpperCase().match(pattern).join(', '));
}

main('Hi, how are you?');
main('hello');