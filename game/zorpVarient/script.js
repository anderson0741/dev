const rs = require("readline-sync");

let input = document.getElementById("typeScript").nodeValue();

$(document).ready(function(){
    $(document).keypress(function(key){
        alert(key.);
    })
})

console.log("Where am I?");

let inv = [];
let location = [];
let car = [];
let isAlive = true;

while(isAlive) {
    let userinput = rs.question("What should I do?");
    if(userinput.includes("look")) {
        if(location.includes("outside")){
            console.log("theres a car!!!")
        } else {
            console.log("looks like a dark basement, some light is coming through the bottom of what looks like a door, and a flashlight is by the door");
        }
    } else if(userinput.includes("scream") || userinput.includes("hulk smash") || userinput.includes("smash") || userinput.includes("yell") || userinput.includes("cry")) {
        console.log("Someone killed you for being stupid, and not thinking that through")
        isAlive = false;
    } else if(userinput.includes("take") && userinput.includes("flashlight")) {
        console.log("You have the flashlight")
        inv.push("flashlight")
    } else if(userinput.includes("inventory") || userinput === "i" || userinput.includes("inv")){
        for(let i = 0; i < inv.length; i++) {
            console.log(inv[i]);
        }
    } else if(userinput.includes("use") && userinput.includes("flashlight")) {
        if(inv.includes("flashlight")) {
            console.log("there are tarps taped over some windows, a key under a table, and a door that is locked")
        } else {
            console.log("you dont have a flashlight")
        }
    } else if(userinput.includes("take") && userinput.includes("key")) {
        console.log("I've got the key")
        inv.push("key")
    } else if(userinput.includes("open") && userinput.includes("door")) {
        if(inv.includes("key")){
            console.log("You opened the door, and the kidnapper killed you")
            isAlive = false;
        } else {
            console.log("its locked")
        }
    } else if(userinput.includes("remove") && userinput.includes("tarps")) {
        console.log("you pulled the tarps down")
        inv.push("tarps")
    } else if(userinput.includes("look") && userinput.includes("window")) {
        if(inv.includes("tarps")) {
            console.log("I see a car")
        } else {
            console.log("There are tarps covering the window")
        }
    } else if(userinput.includes("climb")) {
        console.log("youve escaped outside")
        location.push("outside")
    } else if(userinput.includes("car")) {
        if(location.includes("outside")) {
            if(inv.includes("keys")){
                console.log("Youre free!")
                break
            } else {
                console.log("You needed they keys, the kidnappers killed you...")
                isAlive = false;
            }
        } else {
            console.log("How? I am still inside?")
        }
    }
}