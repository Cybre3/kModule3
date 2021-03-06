function solve() {
   const entryText = document.getElementById('chat_input');
   const chatMessages = document.getElementById('chat_messages');
   const button = document.getElementById('send');
   button.addEventListener('click', () => {
      if (!entryText.value) {
         return;
     }
      const div = document.createElement('div');
      div.setAttribute('class', 'message my-message');
      chatMessages.appendChild(div);
      div.innerText = entryText.value; 
      entryText.value = '';
   });
}


