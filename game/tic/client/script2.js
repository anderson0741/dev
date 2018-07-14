(function (window, $, undefined) {
    // let server = "localhost:8080"
    let tictac;
    let $boxes = $('.box')

    // const player = "X";
    // const comp = "O";


    $('.box').click(function () {

        let $boxes = $('.box')


        $.ajax({
            type: 'POST',
            url: '127.0.0.1: 8080',
            data: {
                'playermove': e.target.id
            },
            // success: function(boxes) {
            //     $.each(boxes, function(i, drawboard) {
            //         $boxes.append(gameBoard)
            //     })
            // }
            success: drawboard,
            error: function (err) {
                console.log("Server Error")
            }
        });
    });

    function drawboard(response) {
        for (i = 0; i < response.tictac.length; i++) {
            if (response.tictac[i] == "X") {
                
                console.log("hello")
            } else if (response.tictac[i] == "O") {
                return {gameBoard: tictac}
            }
        }
    }

    function startGame() {
        document.querySelector('.finish').style.display = "none"
        // tictac = Array.from(Array(9).keys());
        for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = '';
        boxes[i].style.removeProperty('background-color');
        boxes[i].addEventListener('click', funClick, false);
        }
    }
    function turn(squareId, playerz) {
        // tictac[squareId] = playerz;
        document.getElementById(squareId).innerText = playerz;
        // let won = check(tictac, playerz);
        // if (won) gameOver(won);
        // return won;
    }
    function gameOver(won) {
        for (let index of winMoves[won.index]) {
            document.getElementById(index).style.backgroundColor =
                won.playerz == player ? "limegreen" : "red";
        }
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].removeEventListener('click', funClick, false)
        }
        Winner(won.playerz == player ? "YOU WIN!" : "Loser...")
    }

    function Winner(whoWon) {
        document.querySelector('.finish').style.display = "block";
        document.querySelector('.finish .text').innerText = whoWon;
    }
    function tie() {
        if (availableSquare().length == 0) {
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].style.display.backgroundColor = 'purple';
                boxes[i].removeEventListener('click', funClick, false);
            }
            Winner("Tie Game")
            return true;
        }
        return false;
    }

})(window, jQuery, undefined);