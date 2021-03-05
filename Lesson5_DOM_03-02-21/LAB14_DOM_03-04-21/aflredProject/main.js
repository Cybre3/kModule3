let addBtn = document.getElementById('menu-add-btn');
let cancelBtn = document.getElementById('form-cancel-btn');
let modal = document.getElementById('modal');

addBtn.addEventListener('click', dropDown);
cancelBtn.addEventListener('click', goUp);

function dropDown() {
    console.log('clicked');
    modal.classList.add('dropDown');
}

function goUp() {
    modal.classList.remove('dropDown');
    modal.classList.add('goUp');
}
