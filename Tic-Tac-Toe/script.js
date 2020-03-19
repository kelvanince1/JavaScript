const board = document.getElementById('board');
const cellElements = document.querySelectorAll('[data-cell');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const winningMessageElement = document.getElementById('winning-message');
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';

const WINNING_COMBONATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let circleTurn;

(function startGame() {
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true });
    });

    setBoardHoverClass();
})();

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

    placeMark(cell, currentClass);

    // Check for win
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    }
    
    // Switch suit
    swapTurns();

    setBoardHoverClass();
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.textContent = 'Draw!';
    } else {
        winningMessageTextElement.textContent = `${circleTurn ? "O's" : "X's"} wins!`;
    }

    winningMessageElement.classList.add('show');
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    });
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);

    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}

function checkWin(currentClass) {
    return WINNING_COMBONATIONS.some(combonation => {
        return combonation.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}