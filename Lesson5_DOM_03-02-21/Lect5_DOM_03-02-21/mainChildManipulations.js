const ul = document.querySelector('ul');
const li = document.createElement('li');
const li2 = document.getElementById('two');

li.innerText = 'Item 4';
ul.appendChild(li);
ul.insertBefore(li, li2);
ul.replaceChild(li, li2);
// const liTwo = document.querySelector('#two');
document.write('<h2> Another Title </h2>');

// let removeChild = ul.removeChild(liTwo);
// liTwo.remove();