function growingWord() {
    const text = document.querySelector('#exercise p');
    const font = text.style.fontSize;
    const color = text.style.color;

    if (!font && !color) {
        text.style.cssText = 'font-size:2px; color:blue';
        return;
    }

    // If the text already has
    let size = font.slice(0, font.length - 2);
    size *= 2;
    text.style.fontSize = size + 'px';

    if (color === 'blue') {
        text.style.color = 'green';
    } else if (color === 'green') {
        text.style.color = 'red';
    } else if (color === 'red') {
        text.style.color = 'blue';
    }
}
