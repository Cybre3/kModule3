// (function(){
//     console.log('Hello world');
// })();

//------------------------------------------//

// (() => {
//     console.log('Hello world');
// })();

//------------------------------------------//

// !function(){console.log('Hello World')}

// let x = 5;

//------------------------------------------//

// (function() {
//     let foo = 'var';
//     console.log(foo);
// })
// console.log(foo); // reference error

//------------------------------------------//

// let ref = (() => {
//     let secret = 'I am secret';
//     return {
//         change(value){
//             secret = value;
//         },
//         getSecret(){
//             return secret;
//         }
//     };
// })();

// console.log(ref.getSecret()); // I am secret
// ref.change('I changed it');
// console.log(ref.getSecret()); // I changed it

//------------------------------------------//

// let math = (()=>{

//     const add = (a, b) => console.log(a + b);
//     const sub = (a, b) => console.log(a - b);
//     return {
//         add,
//         sub
//     };
// })();

// math.add(5, 4);  // 9

//------------------------------------------//

// let a = (function(name){
//     console.log('Hi ' + name);
// })('Mike'); // Hi Mike

//------------------------------------------//

