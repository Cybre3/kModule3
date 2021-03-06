let btn = document.getElementById('btn');
let container = document.getElementById('conatiner');
let body = document.getElementById('body');

body.addEventListener('click', () => {
    console.log('body clicked');
})
container.addEventListener('click', () => {
    console.log('container clicked');
})
btn.addEventListener('click', () => {
    console.log('button clicked');
})

function handler (e) { // returns the event object when clicked
    e.stopPropagation();
    console.log('btn clicked');    
}