var add1 = document.getElementById("add1")
var add2 = document.getElementById("add2")
var sub1 = document.getElementById("sub1")
var sub2 = document.getElementById("sub2")
var div1 = document.getElementById("div1")
var div2 = document.getElementById("div2")

var add = document.getElementById("add")
var subtract = document.getElementById("subtract")
var divide = document.getElementById("divide")

function clearInputs(){
    add1.value ="";
    add2.value ="";
    sub1.value ="";
    sub2.value ="";
    div1.value ="";
    div2.value ="";
    mult1.value="";
    mult2.value="";
}

add.onclick = function(){
    var firstNum = Number(add1.value);
    var secondNum = Number(add2.value);
    outputAdd.innerHTML = firstNum + secondNum;
    clearInputs();
}

subtract.onclick = function(){
    var firstNum = Number(sub1.value);
    var secondNum = Number(sub2.value);
    outputSub.innerHTML = firstNum - secondNum;
    clearInputs();
}

divide.onclick = function(){
    var firstNum = Number(div1.value);
    var secondNum = Number(div2.value);
    outputDiv.innerHTML = firstNum / secondNum;
    clearInputs();
}

mult.onclick = function(){
    var firstNum = Number(mult1.value);
    var secondNum =Number(mult2.value);
    outputMult.innerHTML = firstNum * secondNum;
    clearInputs();
}

add.onmouseover = function () {
    add.style.backgroundColor = "green";
};

add.onmouseleave = function () {
    add.style.backgroundColor = "white";
};

subtract.onmouseover = function () {
    subtract.style.backgroundColor = "red";
};
subtract.onmouseleave = function () {
    subtract.style.backgroundColor = "white";
};

divide.onmouseover = function () {
    divide.style.backgroundColor = "blue";
};
divide.onmouseleave = function () {
    divide.style.backgroundColor = "white";
};


mult.onmouseover = function () {
    mult.style.backgroundColor = "yellow";
};
mult.onmouseleave = function () {
    mult.style.backgroundColor = "white";
};