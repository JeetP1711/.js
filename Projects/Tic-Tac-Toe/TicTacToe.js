const board = document.getElementById('board');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let cells = Array(9).fill(null);
let gameActive = true;

board.addEventListener('click', function (event) {
    const cell = event.target;
    const index = Array.from(board.children).indexOf(cell);
    if (cell.classList.contains('cell') && !cell.textContent && gameActive) {
        cell.textContent = currentPlayer;
        cells[index] = currentPlayer;
        if (checkWinner()) {
            alert(currentPlayer + ' wins!');
            gameActive = false;
        } else if (cells.every(cell => cell)) {
            alert('It\'s a tie!');
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
});

resetButton.addEventListener('click', function () {
    cells.fill(null);
    currentPlayer = 'X';
    gameActive = true;
    Array.from(board.children).forEach(cell => {
        cell.textContent = '';
    });
});

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
    });
}