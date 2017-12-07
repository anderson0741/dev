//pricing
var goombaPrice = 5;
var bobombPrice = 7;
var cheepCheepPrice = 11;

//quantities
var goombaQty = 12;
var bobombQty = 8;
var cheepCheepQty = 5;

//subtotals

// var bobombSubtotal = bobombPrice * bobombQty;

//arithmatic and DOM manipulation
// document.getElementById("bob-omb_subtotal").innerHTML = "Subtotal" +bobombSubtotal;

var goCaught = document.getElementById("goCaught")
var bobCaught = document.getElementById("bobCaught")
var cheCaught = document.getElementById("cheCaught")
var cheOutput = document.getElementById("cheOutput")
var boOutput = document.getElementById("boOutput")
var goOutput = document.getElementById("goOutput")
var finalOut = document.getElementById("finalOut")
var goo = document.getElementById("goo")
var bom = document.getElementById("bom")
var che = document.getElementById("che")

// goo.oninput = function(){
goo.onclick = function(){
    var goo1 = Number(goombaPrice.value);
    var goo2 = Number(goombaPrice.value);
    goOutput.innerHTML = goo1 * goo2; 
}

bom.onclick = function(){
    var bom1 = Number(bobombPrice.value);
    var bom2 = Number(bobombQty.value);
    boOutput.innerHTML = bom1 * bom2; 
}

che.onclick = function(){
    var che1 = Number(cheepCheepPrice.value);
    var che2 = Number(cheepCheepQty.value);
    cheOutput.innerHTML = che1 + che2; 
}

// total.oninput = function(){
//     finalOut.innerHTML = 
// }