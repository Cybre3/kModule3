function solve() {

  let visitedArr = [];

  let aTags = document.getElementsByTagName('a');
  let pTags = document.getElementsByTagName('p');

  Array.from(pTags).forEach(p => {
    let num = p.innerText.split(' ')[1];
    visitedArr.push(+num);
  });
  // ['kingsland', 'google', 'youtube', 'wiki', 'gmail', 'stack']
  Array.from(aTags).forEach((link, index) => {
    link.addEventListener('click', () => {
      // inc number of visit and manipulate the p
      let para = link.nextElementSibling;
      para.innerText = `visited ${++visitedArr[index]}`;
    });
  });
}