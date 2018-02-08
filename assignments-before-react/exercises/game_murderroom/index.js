//escape the room

const rs = require("readline-sync");

console.log("You are in a locked room.  There is a door, a hidden key, a hole in the wall, a murderer and or deathly creatures in the house.");

let inv = [];
let isAlive = true;

while(isAlive) {
    let userinput = rs.question("What do you want to do?");
    if(userinput.includes("hole") && userinput.includes("put")) {
        console.log("deeper")
        isAlive = false;
        console.log("youre raped to death douche")
    } else if(userinput.includes("open") && userinput.includes("door")) {
        if(inv.includes("key")) {
            console.log("You get to live another day")
            break
        } else {
            console.log("You dont have the key stupud... WTF were you thinking?")
        }
    } else if(userinput.includes("kick") || userinput.includes("smash")) {
        console.log("You broke all your limbs, and you are dead")
        isAlive = false;
    } else if(userinput.includes("take") && userinput.includes("key")) {
        console.log("You found a key, but the key?");
        inv.push("key")
    } else if(userinput.includes("look")) {
        console.log("You are in a locked room. \n There is a key. \n  Go get it and open the door")
    } else {
        console.log("Youre a tard bag")
    }
}

//look -> will print description of the room
//open door -> try to open door (if you have key you escape if not you die!)
//put hand in hole -> you die GAMEOVER
//take key -> put in inventory
//error handling

