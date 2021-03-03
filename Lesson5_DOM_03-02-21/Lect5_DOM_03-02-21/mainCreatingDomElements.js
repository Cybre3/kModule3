const list = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Peter';
const li2 = document.createElement('li');
li2.innerText = 'Maria';

list.appendChild(li1)
list.appendChild(li2);
document.querySelector('body').appendChild(list);