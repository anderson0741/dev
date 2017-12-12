//pricing
var goomPrice = 5;
var bomPrice = 7;
var chePrice = 11;

//quantities
// var goombaQty = 12;
// var bobombQty = 8;
// var cheepCheepQty = 5;

//subtotals

// var bobombSubtotal = bobombPrice * bobombQty;

//arithmatic and DOM manipulation
// document.getElementById("bob-omb_subtotal").innerHTML = "Subtotal" +bobombSubtotal;

var goCaught = document.getElementById("goCaught")
var bomCaught = document.getElementById("bomCaught")
var cheCaught = document.getElementById("cheCaught")
var cheOutput = document.getElementById("cheOutput")
var boOutput = document.getElementById("boOutput")
var goOutput = document.getElementById("goOutput")
var finalOut = document.getElementById("finalOut")
var goo = document.getElementById("goo")
var bom = document.getElementById("bom")
var che = document.getElementById("che")
// var chePrice = document.getElementById("chePrice")
// var bomPrice = document.getElementById("bomPrice")
// var goomPrice = document.getElementById("goomPrice")

// goo.oninput = function(){
goo.oninput = function(){
    var goo1 = Number(goomPrice);
    var goo2 = Number(goCaught.value);
    goOutput.innerHTML = goo1 * goo2; 
}

bom.oninput = function(){
    var bom1 = Number(bomPrice);
    var bom2 = Number(bomCaught.value);
    boOutput.innerHTML = bom1 * bom2; 
}

che.oninput = function(){
    var che1 = Number(chePrice);
    var che2 = Number(cheCaught.value);
    cheOutput.innerHTML = che1 * che2; 
}

final.onclick = function(){
    var goo1 = Number(goomPrice);
    var goo2 = Number(goCaught.value);
    var bom1 = Number(bomPrice);
    var bom2 = Number(bomCaught.value);
    var che1 = Number(chePrice);
    var che2 = Number(cheCaught.value);
    finalOutput.innerHTML = (goo1 * goo2) + (bom1 * bom2) + (che1 * che2);
}

goCaught.onmouseover = function () {
    goCaught.style.backgroundColor = "yellow";
};
goCaught.onmouseleave = function () {
    goCaught.style.backgroundColor = "rgba(255, 213, 0, 0.479)";
};

bomCaught.onmouseover = function () {
    bomCaught.style.backgroundColor = "yellow";
};
bomCaught.onmouseleave = function () {
    bomCaught.style.backgroundColor = "rgba(255, 213, 0, 0.479)";
};


cheCaught.onmouseover = function () {
    cheCaught.style.backgroundColor = "yellow";
};
cheCaught.onmouseleave = function () {
    cheCaught.style.backgroundColor = "rgba(255, 213, 0, 0.479)";
};

fin.onmouseover = function () {
    fin.style.backgroundColor = "red";
};
fin.onmouseleave= function () {
    fin.style.backgroundColor = "rgba(255, 213, 0, 0.479)";
};
// colors.onmouseover = function () {
//     colors.style.backgroundColor = "blue";
// };