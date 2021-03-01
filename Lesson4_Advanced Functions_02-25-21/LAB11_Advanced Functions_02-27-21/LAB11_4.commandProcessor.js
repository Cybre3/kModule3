function main() {
    let string = '';
    return {
        append: (addWord) => (string += addWord),
        removeStart: (number) => (string = string.substring(number)),
        removeEnd: (number) =>
            (string = string.substring(0, string.length - number)),
        print: () => console.log(string),
    };
}

let firstZeroTest = main();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
