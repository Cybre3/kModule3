// function sayHello(){
//     return function(){
//         console.log('Hello World');
//     }
// }

// // let a = sayHello();
// // a();
// // or
// // sayHello()();

//-------------------------------------------------//

// function counter(){
//     let counter = 0;
//     return function(){
//         console.log(counter);
//         counter++;
//     }
// }

// let a = counter();
// a();
// a();
// a();

//--------------------------------------------------//


// template functions and Code reuse
const greet = greeting => separator => emphasis => name => console.log(greeting + separator + name + emphasis);
const awkradGreeting = greet('Hello')('....')('?');
awkradGreeting('John');
awkradGreeting('Tom');

const sayHello = greet('Hello')(', ');
sayHello('.')('Mike');