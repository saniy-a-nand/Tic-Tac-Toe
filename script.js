let currentPlayer = 'X';
let board = Array(9).fill(null);

function handleClick(cell) {
    const index = cell.id;
    if (board[index] || checkWinner()) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    
    if (checkWinner()) {
        setTimeout(() => alert(`${currentPlayer} wins!`), 10);
        return;
    }
    if (!board.includes(null)) {
        setTimeout(() => alert("It's a draw!"), 10);
        return;
    }
    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    board.fill(null);
    document.querySelectorAll('.col').forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}


