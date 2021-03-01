function main (num) {
    // return x => x + num;
    return function (x) {
        return x + num;
    };
}
let add5 = main(5);
console.log(add5(2));
console.log(add5(3));