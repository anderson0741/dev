var rs = require("readline-sync");

var hello = rs.question("Hello?");
var fname = rs.question("Whats your name?");
var laname = rs.question("Whats your last name?");
var correct = rs.keyInYN("Is this Correct?");
if(correct === true){
    console.log("good");
} else {
    console.log("Shut up");
}
var name = fname.concat(" " + laname);
// var long = rs.question("This message is abnoxiously long, and strictly here to annoy you.");
// var person = {
//     first = fname,
//     last = laname,
//     correct = correct,
//     fullName = name,
//     annoy = long,
// }

console.log(hello.length + " characters");
console.log(fname.length + " characters");
console.log(laname.length + " characters");
console.log(hello + " " + fname +" "+ laname);
console.log(name + " is your full name")
// console.log(long);

function checkLength(str){
    if(str.length > 20){
        return str.slice(Math.floor(long.length /2));
    } else {
        return str;
    }
}