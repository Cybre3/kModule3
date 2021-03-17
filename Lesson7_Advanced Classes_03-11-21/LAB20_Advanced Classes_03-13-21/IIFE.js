let lib = (function () {
    let helloMsg = 'Hello';
    let hiMsg = 'Hi';
    let sayHello = () => {
        console.log(helloMsg);
    };

    let sayHi = () => {
        console.log(hiMsg);
    };

    return {
        hello: sayHello,
        hi: sayHi,
    };
})();
let lib2 = (function () {
    let sayHello = (msg) => {
        console.log(msg);
    };

    let sayHi = (msg) => {
        console.log(msg);
    };

    return {
        hello: sayHello,
        hi: sayHi,
    };
})();
let myLib = lib2;
myLib.hello('this is the message');

function main() {
    let lib3 = (function () {
        let sayHello = (msg) => {
            console.log(msg);
        };

        let sayHi = (msg) => {
            console.log(msg);
        };

        return {
            hello: sayHello,
            hi: sayHi,
        };
    })();

    return lib3;
}

let myLib1 = main;

