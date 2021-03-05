function solve() {
    // Select Dom elements
    const content = document.getElementById('input');
    const output = document.getElementById('output');

    // Array of sentences
    const sArr = content.innerText.split('.');
    sArr.pop();
    // Get to know how many paragraphs needed
    const pNum = Math.ceil(sArr.length / 3);

    // loop to generate paragraph
    for (let i = 0; i < pNum; i++) {
        let pArr;
        // Create paragraphs
        let p = document.createElement('p');
        pArr = sArr.splice(0, 3);
        // Config the innerText property
        p.innerText = pArr.join('. ') + '.';
        // Append the paragraph to the DOM
        output.appendChild(p);
    }
}
