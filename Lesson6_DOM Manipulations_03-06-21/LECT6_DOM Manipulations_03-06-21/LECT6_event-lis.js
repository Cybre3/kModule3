const btn = document.getElementById('btn');

init(btn);

function init(el) {
    el.addEventListener('click', handler);
}

function handler() {
    console.log('clicked');
}
