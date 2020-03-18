const cellElements = document.querySelectorAll('[data-cell');
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';

let circleTurn;

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

    placeMark(cell, currentClass);

    // Switch suit
    swapTurns();
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn;
}