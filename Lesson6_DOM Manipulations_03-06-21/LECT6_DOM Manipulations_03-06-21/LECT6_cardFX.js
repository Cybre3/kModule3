// let btn = document.getElementById('btn');

// btn.addEventListener('click', handler);

// function handler(e){
//     // element you attach the addEventListener to it 'btn'
//     console.log(e.currentTarget);
//     // where the user clicked
//     console.log(e.target);
// }

const card = document.querySelector('.card');
const title = document.querySelector('.title');
const body = document.querySelector('body');

card.addEventListener('mousemove', bgColor);

function bgColor(e) {
    title.textContent = `Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}`;
    body.style.backgroundColor = `rgba(${e.offsetX}, ${e.offsetY}, 40)`;
}
