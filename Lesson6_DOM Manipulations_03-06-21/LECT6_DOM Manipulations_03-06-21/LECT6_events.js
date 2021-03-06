console.log('Beginning of App....');

// setTimeout(fetchUser, 1000);
//--------even if---------------//
setTimeout(fetchUser, 0);

console.log('Line 1');
console.log('Line 2');
console.log('Line 3');
console.log('Line 4');
console.log('Line 5');
console.log('Line 6');

console.log('End of App..........');

/* 
Beginning of App....
Line 1
Line 2
Line 3
Line 4
Line 5
Line 6
End of App..........
User fetched ..........
*/

function fetchUser(){
    console.log('User fetched ..........');
}