// let list = document.querySelector('ul');
let link = document.querySelector('a');
// console.log(list.parentElement);
// console.log(list.children);
// console.log(list.lastElementChild);

let ul = link.parentElement.parentElement;
let ul2 = link.parentElement.parentElement.nextElementSibling;
let ul1 = ul2.previousElementSibling;

console.log(ul);
console.log(ul2);
console.log(ul1);