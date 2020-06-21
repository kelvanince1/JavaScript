const rows = document.getElementsByClassName('row');
let messageElement = document.getElementById('message');

const board = new Array(9).fill(null);
let isXTurn = true;
let winner;

for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener('click', e => {
        if (winner || board[e.target.id]) return;

        rows[i].textContent = isXTurn ? 'X' : 'O';
        board[e.target.id] = isXTurn ? 'X' : 'O';

        winner = checkWinner(board);

         if (winner) {
             messageElement.textContent = `Winner is ${winner}`
         };
        isXTurn = !isXTurn;
    });
}

function checkWinner(board) {
    const winningCombinations = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a,b,c] = winningCombinations[i];

        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            return board[a];
        }
    }

    return null;
}