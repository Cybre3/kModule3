// const links = document.querySelector('a');
const list = document.querySelector('ul');

// Array.from(links).forEach(link => link.addEventListener('click', removeToDo));
list.addEventListener('click', removeTodo);

// function removetodo(e) {
//     let li = e.target.parentElement;
//     li.remove();
//     console.log(li);
// }
function removeTodo(e){
    if(e.target.classList.contains('delete-todo')){
        e.target.parentElement.remove();
    }
}