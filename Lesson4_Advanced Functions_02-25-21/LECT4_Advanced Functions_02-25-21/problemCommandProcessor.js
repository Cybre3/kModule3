function main() {
    let string = '';
    return {
        append: (addWord) => string += addWord,
        removeStart: (number) => string = string.substring(number),
        removeEnd: (number) => string = string.substring(0, string.length - number),
        print: () => console.log(string)
    };
}

// let main = (function () {
//     let string = '';
//     return {
//         append: (addWord) => string += addWord,
//         removeStart: (number) => string = string.substring(number),
//         removeEnd: (number) => string = string.substring(0, string.length - number),
//         print: () => console.log(string)
//     };
// })();

// let library = main;

let library = main();
library.append('Hello world');
library.print();
library.removeEnd(2);
library.print();
library.removeStart(2);
library.print();