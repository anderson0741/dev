function multiply(x, y) {
    if(typeof x !== "number" || typeof y !== "number"){
        throw "Invalid input";
    }
    return x * y;
}

//makes it so you can export to another js file
module.exports = multiply;