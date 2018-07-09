let tictac;
const player = "O";
const comp = "X";

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

const cells = document.querySelectorAll('.cell');

startGame();

function startGame() {
    document.querySelector('.finish').style.display = "none"
    tictac = Array.from(Array(9).keys());
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        // cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', funClick, false);
    }
}

function funClick(square) {
    turn(square.target.id, player)
    // console.log(square.targer.id)
}

turn = (squareId, playerz) => {
    tictac[squareId] = playerz;
    document.getElementById(squareId).innerText = playerz
}