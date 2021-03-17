const list = document.getElementById('items');
list.addEventListener('click', deleteThis);

/* 
document.body.addEventListener('click', deleteThis);
*/

function addItem() {
    const newItem = document.getElementById('newText');

    const li = document.createElement('li');
    li.innerHTML = `${newItem.value} <a class = 'del' href = '#'>[Delete]</a>`;

    /* 
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.textContent = input.value + ' ';
    a.content = '[Delete]';
    a.setAttribute('href','#');
    li.appendChild(a);
    list.appendChile(li);
    */

    list.appendChild(li);
    newItem.value = '';
}

function deleteThis (e){
    if (e.target.className !== 'del'){
        return;
    }

    e.target.parentElement.remove();
}

/* 
function deleteThis(){
    if(e.target.nodeName === 'A'){ <-- Must be upper case A w/nodeName
        const li = e.target.parentElement;
        li.remove();
    }
}
*/