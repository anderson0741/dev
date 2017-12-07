var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")
var submit = document.getElementById("submit")
var output = document.getElementById("output")

function clearInputs(){
    num1.value = "";
    num2.value = "";
}

add.onclick = function(){
    var firstNum = Number(num1.value)
    var secondNum = Number(num2.value)
    // add numbers together and display them on the page
    output.innerHTML = firstNum + secondNum;
    clearInputs();

    //take value from input
    // var convertedFromString = Number(input.value)); //as a number if you enter a letter, it will return NaN (not a number)
    // console.log(input.value); //as a string
    //check if its a number
    //send an alert
}

