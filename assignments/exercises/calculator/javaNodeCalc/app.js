var rs = require("readline-sync");

// var select = ["add", "subtract", "multiply", "divide"];
// var select = rs.keyInSelect(select, " Choose property");

var first = rs.question("First Variable");
var second = rs.question("Second Variable");

// var mathmatical =
var equation = function () {
    var select = ["add", "subtract", "multiply", "divide"];
    var select = rs.keyInSelect(select, " Choose property");
    if (select === 0) {
        return Number(first) + Number(second);
    } else if (select === 1) {
        return Number(first) - Number(second);
    } else if (select === 2) {
        return Number(first) * Number(second);
    } else if (select === 3) {
        return Number(first) / Number(second);
    } else {
        return "game over";
    }
}
console.log(equation());