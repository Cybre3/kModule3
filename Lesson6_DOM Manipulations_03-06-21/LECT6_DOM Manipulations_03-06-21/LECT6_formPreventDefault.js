document.getElementById('my-form').addEventListener('submit', handler);

function handler (e) { // returns the event object when clicked
    e.preventDefault();
    console.log(e);    
}