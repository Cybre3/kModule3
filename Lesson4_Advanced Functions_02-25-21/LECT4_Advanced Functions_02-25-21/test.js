// function sayHello(){
//     return 'Hello, ';
// }
// function greeting(helloMessage, name){
//     return helloMessage() + name;
// }
// console.log(greeting(sayHello, 'JavaScript!'));
// Hello, JavaScript!

//---------------------------------------------------------------//

// function sayHello(){
//     return function(){
//         console.log('Hello!');
//     };
// }
// const myFunc = sayHello();
// myFunc();
// or
// sayHello()()

//---------------------------------------------------------------//

// const write = function () {
//     return "Hello, world!";
// };
// console.log(write()); // Hello, world!

//---------------------------------------------------------------//

// let array1 = [1, 2, 12, 3, 15, 8, 6, 10];
// let found = array1.find(isFound);
// function isFound(element) {
//     return element > 10; //True or false
// }
// console.log(found); // 12

//---------------------------------------------------------------//

// function sum(x, y, printSum){
//     let sum = x + y;
//     printSum(sum);
// }

// sum(3, 2, (result) => {
//     console.log(result);
// });

//---------------------------------------------------------------//
// Store a function in a variable

// const a = function(name = 'unknown') {
//     console.log('Hello ' + name);
// };

// a();  // Hello Unknown

//--------------------------------------------------------------//
// pass a function as a parameter

// function sum(x, y, returnSum){
//     let sum = x + y;
//     returnSum(sum);
// }

// sum(3, 2, (result) => {
//     console.log(result);
// });

//---------------------------------------------------------------//
// function as variable

function sum(x, y, returnSum){
    let sum = x + y;
    returnSum(sum);
}

function returnSum(result) {
    console.log(`The sum = ` + result);
}

sum(3, 2, returnSum);