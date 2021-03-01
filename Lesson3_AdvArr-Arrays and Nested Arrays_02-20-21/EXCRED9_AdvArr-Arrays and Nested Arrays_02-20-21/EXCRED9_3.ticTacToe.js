function main(movesArr) {
    let boardArr = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
    ];

    // Initial player
    let player = 'X';
    let hasWon = false;

    for (let line of movesArr) {
        let [row, column] = move.split(' ');

        let spot = boardArr[row][column];
        if (spot === false) {
            dashboard[row][column] = player;
            // check if user wins or not
           if(ifWins(boardArr, player))
        } 
        // check if board is full
        else if (boardArr.every(row => row.every(spot => spot !== false))) {
            break;
        }
        // if location not available
        else {
            console.log(`This space is already taken. Please choose another!`);
        }
    }
    
}

function ifWins(board, player) {
    return checkLeftDiagonal(board, player) || checkRightDiagonal(dashboard, player) || checkRows(board, player) || checkColumns(board, player);
}

function checkLeftDiagonal(board, player){
    let leftArr = [];
    let leftIndex = 0;
    board.forEach(row =>{
        leftArr.push(row[Index]);
        leftIndex++;
    });
    return mainArr.every(el => el === player);
}
function checkRightDiagonal(board, player){
    let rightArr = [];
    let rightIndex = 0;
    board.forEach(row =>{
        rightArr.push(row[rightIndex]);
        rightIndex++;
    });
    return mainArr.every(el => el === player);
}
main(['0 1', '0 0', '0 2', '2 0', '1 0', '1 1', '1 2', '2 2', '2 1', '0 0']);
