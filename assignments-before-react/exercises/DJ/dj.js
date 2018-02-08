var square = document.getElementById("square");

square.onmouseover = function () {
    square.style.backgroundColor = "blue";
};

square.onmousedown = function () {
    square.style.backgroundColor = "red";
};

square.onmouseup = function () {
    square.style.backgroundColor = "yellow";
};

square.ondblclick = function () {
    square.style.backgroundColor = "green";
};

window.onscroll = function () {
    square.style.backgroundColor = "orange";
};

window.onkeypress = function (e) {
    if (e.keyCode === 98) {
        square.style.backgroundColor = "blue";
    } else if (e.keyCode === 114) {
        square.style.backgroundColor = "red";
    } else if (e.keyCode === 121) {
        square.style.backgroundColor = "yellow";
    } else if (e.keyCode === 103) {
        square.style.backgroundColor = "green";
    } else if (e.keyCode === 111) {
        square.style.backgroundColor = "orange";
    }
}