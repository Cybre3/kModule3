function solve() {
    const addBtn = document.querySelector('button');
    const UserInput = document.querySelector('input');
    const listLetters = document.querySelectorAll('li');
    
    addBtn.addEventListener('click', () => {

        if (UserInput.value === '') {
            return;
        }
        
        const inputFirstLetter = UserInput.value[0].toLowerCase();
        const inputLetterIndex = inputFirstLetter.charCodeAt() - 97;
        const letterInList = listLetters[inputLetterIndex];

        if ((letterInList.textContent === '')) {
            letterInList.textContent = UserInput.value;
        } else {
            letterInList.textContent += `, ${UserInput.value}`;
        }
    });
}
