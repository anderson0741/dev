// let alpha = ["a", "b", "c", "d", "e", "f"];
// let nums = [1,2,3];

// let firstHalf = alpha.slice(0,3);
// let secondHalf = alpha.slice(3);

// let frankenstein = [...firstHalf, ...nums, ...secondHalf];
// console.log(frankenstein);


// function IkeaCouch(color){
//     this.color = color;
//     this.modelNo="34r7er8gn8g3";
//     this.chaise = typeof chaise === "undefined" ? "standard" : chaise;
// }

// let myNewCouch = new IkeaCouch("chartreuse");

// console.log(myNewCouch);


// ES6 example
// let verb = "code";
// let adverb = "quickly";
// let noun1 = "carrots";
// let noun2 = "toe knife";
// let noun3 = "penguins";
// let adjective1 = "bad";
// let adjective2 = "goofy";

// let adlib = "One day while attending to the " + noun1 + " I came upon a " + 
// adjective1 + " " + noun2 + ". I " + adverb + " " + verb + " " + adjective2 + " "
// + noun3;

// let adlibEs6 = `One day while attending to the ${noun1}.  I came upon a ${adjective1} ${noun2}.
// I ${adverb} ${verb} ${adjective2} ${noun3}.`

// console.log(adlibEs6);


// let name = "Justin";
// let age = 38;
// let occupation = "ghost";

// let person = {
//     name,
//     age,
//     occupation,
// }

// console.log(person);

const person = {
    name: "Justin",
    age: 38,
    occupaiton: 'ghost',
    friends: ["Mona", "Shrek"]
}

let {name, age, occupation, friends} = person;
let [mona, shrek] = person.friends;

console.log(mona, shrek);