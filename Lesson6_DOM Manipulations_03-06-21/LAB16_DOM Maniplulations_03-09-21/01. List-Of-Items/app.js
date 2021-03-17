function addItem() {
  const list = document.getElementById('items');
  const newItem = document.getElementById('newItemText');


  if(!input.value){
    return;
  }
  const li = document.createElement('li');
  li.innerText = newItem.value;
  list.appendChild(li);
  input.value = '';
}
