const btn = document.querySelector('button');
btn.addEventListener('mouseover', handler);

function handler(e) {
    const el = e.currentTarget;
    const backgroundColor = el.style.backgroundColor;

    if (backgroundColor === 'white') {
        el.style.backgroundColor = '#234465';
        el.style.color = 'white';
    } else {
        el.style.backgroundColor = 'white';
        el.style.color = '#234465';
    }
}
