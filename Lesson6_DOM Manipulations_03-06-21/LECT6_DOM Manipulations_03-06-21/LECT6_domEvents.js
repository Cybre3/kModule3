const container = document.querySelector('.container');
const body = document.querySelector('body');
const links = document.querySelectorAll('a');
const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

container.addEventListener('click', () => console.log('container clicked'));
body.addEventListener('click', () => console.log('body clicked'));
list.addEventListener('click', () => console.log('list clicked'));
Array.from(links).forEach(link => link.addEventListener('click', () => console.log('list clicked')));
Array.from(listItems).forEach(listItem => listItem.addEventListener('click', () => console.log('list clicked')));