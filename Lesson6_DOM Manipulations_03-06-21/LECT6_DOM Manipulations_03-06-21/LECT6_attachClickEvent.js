const btn = document.querySelector('button');

btn.addEventListener('click', clickMe);

function clickMe(e){
    const target = e.currentTarget;
    const text = target.textContent;
    target.textContent = +text + 1;
}