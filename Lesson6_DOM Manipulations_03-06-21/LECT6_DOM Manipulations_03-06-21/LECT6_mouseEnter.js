document.getElementById('btn').addEventListener('mouseenter', handler);

function handler (e) { // returns the event object when clicked
    let result = e;
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    e.target.innerText = 'New Text';
    // event type
    console.log(e.type);
    // event timestamp
    console.log(e.timeStamp);
    // coords relative to element
    console.log(e.offsetX, e.offsetY);
    // coords relative to the browser
    console.log(e.clientX, e.clientY);
}