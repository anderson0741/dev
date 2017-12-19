const rs = require("readline-sync");

// first component is a grid 
// second component is a location object that contains info about a particular coordinate 
// third component is the game loop
function whetherShip() {
    this.randomNum = Math.floor(Math.random() * 10);
    return randomNum === 0;
}

function Location() {
    this.isShip = whetherShip();
    this.isHit = false;
    this.display = "~";
}

function Grid() {
    this.grid = [];
    this.shipsSunk = 0;
    this.totalShips = 0;
}
Grid.prototype.genGrid = function () {
    for(let i = 0; i < 8; i++){
        this.grid.push([]);
        for(let j = 0; j < 8; j++){
            let location = new Location();
            if(location.isShip){
                this.totalShips++;
            }
            this.grid[i].push(location);
        }
    }
}

Grid.prototype.displayGrid = function(){
    //print the grid to the screen
    for(let i = 0; i < this.grid.length; i++){
        let row = [];
        for(let j = 0; j < this.grid[i].length; j++){
            row.push(this.grid[i][j].display);
        }
        console.log(row.join(" "));
    }
}

Grid.prototype.attack = function(x, y) {
    let coord = this.grid[y][x];
    coord.isHit = true;
    if(coord.isShip){
        coord.display = "x";
        this.totalShips--;
        if(this.totalShips === 0){

        }
    } else {
        coord.display = "o"
    }

}
//when game starts show a brand new grid

// [
//     ["~", "~", "~"],
//     ["~", "~", "~"],
//     ["~", "~", "~"],
// ]

// asks you to enter in an x and y coordinate
// shows the grid again but this time it displays the results of your attacks

// [
//     ["~", "~", "~"],
//     ["~", "~", "~"],
//     ["O", "~", "~"],
// ]

//above process repeats until 

// [
//     ["~", "~", "~"],
//     ["~", "X", "~"],
//     ["O", "~", "~"],
// ]

let game = new Grid();
game.genGrid();
// game.displayGrid();
// game.attack(4, 6);
// game.attack(4, 7);
// game.attack(4, 5);
// game.grid[4][6].display = "X";
// console.log(game.grid[4][6]);
// console.log(game.totalShips);
function validateCoord(x, y){
    x = Number(x);
    y = Number(y);
    let length = game.grid.length;
    return x >= 0 && x < length && y >= 0 && y < length;
}

function validateAttack(x, y){
    x = Number(x);
    y = Number(y);
    return game.grid[y][x].display !== "~";
}

let turnCounter = 20;
console.log("Welcome to battleship");

game.displayGrid();
while(true){
    console.log("\nRemaining turns: " + turnCounter +"\n")
    let xLimit = game.grid.length -1;
    let yLimit = game.grid[0].length;
    let x = rs.keyIn("choose an x coordinate between 0 and " + xLimit + "\n", {limit: "$<1-" + xLimit + ">"});
    let y = rs.keyIn("choose a y coordinate between 0 and " + yLimit + "\n", {limit: "$<1-" + yLimit + ">"});
    if(!validateCoord(x, y)){
        console.log("\nInvalid coordinate\n")
        continue;
    }
    if(validateAttack(x, y)){
        console.log("\nYou already atttacked this coordinate\n")
    }
    game.attack(x, y);
    turnCounter--;
    if(turnCounter === 0){
        break;
    }
    if(game.totalShips === 0);
    game.displayGrid();
}

if(turnCounter > 0){
    console.log("victory")
} else {
    console.log("defeat.. You suck...")
}
