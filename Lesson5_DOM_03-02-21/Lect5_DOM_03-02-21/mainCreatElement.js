// Messes with whole DOM structure, do not do this; required the whole DOM to be restructured and takes more memory.

// const ul = document.querySelector('ul');
// ul.innerHTML = '<li class = "list-Item"> Item One </li>';

// ------ Instead do this --------------------//

const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.appendChild(li);