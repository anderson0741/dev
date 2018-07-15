
const express = require('express');
// const mongoose = require('mongoose');
const app = express();
// const http = require('http');
// const axios = require('axios');
// const server = require('http').Server(app);
// const io = require('socket.io')(server);
// const bodyParser = require('body-parser');

const player = "X";
const comp = "O";

let tictac = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let winner = null;
let winningMove = null;

const winMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

function startGame() {
    // document.querySelector('.finish').style.display = "none"
    tictac = Array.from(Array(9).keys());
    winner = null;
    winningMove = null;
    // for (let i = 0; i < boxes.length; i++) {
    // boxes[i].innerText = '';
    // boxes[i].style.removeProperty('background-color');
    // boxes[i].addEventListener('click', funClick, false);
    // }
}

function funClick(square) {
    if (typeof tictac[square.target.id] == 'number') {
        if (!turn(square.target.id, player)) {
            if (!tie()) turn(compTurn(), comp);
        }
    }
}

function turn(turnInfo, callBack) {
    // tictac[turnInfo] = callBack;
    // // document.getElementById(squareId).innerText = callBack;
    // let won = check(tictac, callBack);
    // if (won) gameOver(won);
    // return won;
    gameBoard[turnInfo.squarechosen] = "X";
    check(function() {
        if (winner != null) return callBack();
        compTurn(callBack);
    })
}

function check(board, playerz) {
    // let plays = board.reduce((a, e, i) =>
    //     (e === playerz) ? a.concat(i) : a, []);
    // let won = null;
    // for (let [index, win] of winMoves.entries()) {
    //     if (win.every(k => plays.indexOf(k) > -1)) {
    //         won = { index: index, playerz: playerz };
    //         break;
    //     }
    // }
    // return won;
    if (playerWon) {
        winner = "player";
        winningMove = winMoves();
    } else if (compWon) {
        winner = "comp"
        winningMove = winMoves();
    } else if (tie) {
        winner = "tie"
    }

    callBack();
}

// server.gameOver();
// function gameOver(won) {
//     for (let index of winMoves[won.index]) {
//         document.getElementById(index).style.backgroundColor =
//             won.playerz == player ? "limegreen" : "red";
//     }
//     for (let i = 0; i < boxes.length; i++) {
//         boxes[i].removeEventListener('click', funClick, false)
//     }
//     Winner(won.playerz == player ? "YOU WIN!" : "Loser...")
// }

// function Winner(whoWon) {
//     document.querySelector('.finish').style.display = "block";
//     document.querySelector('.finish .text').innerText = whoWon;
// }

function availableSquare() {
    return tictac.filter(d => typeof d == "number");
}

function compTurn(callBack) {
    let as = availableSquare();
    check(callBack);
    return as[Math.floor(Math.random() * as.length)];
}

function tie() {
    if (availableSquare().length == 0) {
        // for (let i = 0; i < boxes.length; i++) {
        //     boxes[i].style.display.backgroundColor = 'purple';
        //     boxes[i].removeEventListener('click', funClick, false);
        // }
        Winner("Tie Game")
        return true;
    }
    return false;
}

// Do I need this?
let gameBoard = tictac;

app.get('/', function (req, res) {
    // return res.send(appz);
    return res.sendFile('/Users/lawrenceanderson/Desktop/dev/game/tic/client/index.html');
});

app.get('/:path', function(req, res) {
    return res.sendFile('/Users/lawrenceanderson/Desktop/dev/game/tic/client/' + req.params.path);
});

app.post('/', (req, res) => {
    turn(req.body, function () {
        res.send({
            gameBoard: tictac,
            winner: winner,
            winningMove: winningMove
        })
    });
});


app.listen(8080, () => {
    console.log("Server is running on port 8080");
}) 
