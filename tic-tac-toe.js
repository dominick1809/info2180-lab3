document.addEventListener('DOMContentLoaded', function() {
    const game = document.getElementById("game");
    const status = document.getElementById("status");
    const board = document.getElementById("board");
    const controls = document.getElementsByClassName("controls");
    const button = document.getElementsByClassName("btn")[0];

    const squares = board.querySelectorAll('div');
    let currentPlayer = 'X';
    let positions = ['', '', '', '', '', '', '', '', ''];

    const winCriteria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Set up the board
    squares.forEach((square, index) => {
        square.classList.add("square");

        square.addEventListener('click', () => handleUserMove(square, index));
        square.addEventListener('mouseover', () => square.classList.add('hover'));
        square.addEventListener('mouseout', () => square.classList.remove('hover'));
    });

    // Handle user move
    function handleUserMove(square, index) {
        if (square.innerText !== 'X' && square.innerText !== 'O') {
            square.innerText = currentPlayer;
            square.classList.add(currentPlayer);
            positions[index] = currentPlayer;

            // Check for a win after each move
            checkForWin();

            // Switch players
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
    }

    // Check for a win
    function checkForWin() {
        for (let w = 0; w <= 7; w++) {
            const win = winCriteria[w];

            const pos1 = positions[win[0]];
            const pos2 = positions[win[1]];
            const pos3 = positions[win[2]];

            if (pos1 === '' || pos2 === '' || pos3 === '') {
                continue;
            }

            if (pos1 === pos2 && pos2 === pos3) {
                status.innerHTML = `Congratulations! ${pos1} is the winner`;
                status.classList.add('you-won');
                break;
            }
        }
    }

    // Reset the game
    button.addEventListener('click', () => {
        positions = ['', '', '', '', '', '', '', '', ''];
        status.innerHTML = 'Move your mouse over a square and click to play an X or an O.';
        status.classList.remove('you-won');
        squares.forEach(square => {
            square.innerText = '';
            square.classList.remove('X', 'O');
        });
        currentPlayer = 'X';
    });

});
