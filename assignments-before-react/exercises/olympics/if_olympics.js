
// Preliminaries

if (5 > 3){
    console.log("is greater than")
} 
if ("cat".length === 3) {
    console.log("is the length")
}

if ("cat" === "dog") {
    console.log("the same")
} else {
    console.log("not the same")
}

// Bronze Medal

var theNameOfThePerson = {
    name: "Bobby",
    age: 18
}
        if (theNameOfThePerson.age > 17) {
            console.log(theNameOfThePerson.name + " is allowed to go to the movie")
        } else {
            console.log(theNameOfThePerson.name + " cant go to the movies")
        }

        if (theNameOfThePerson.name[0] === "B") {
            console.log(theNameOfThePerson.name + " is allowed to go to the movie")
        } else {
            console.log(theNameOfThePerson.name + " cant go to the movies")
        }

        if (theNameOfThePerson.name[0] === "B" && theNameOfThePerson.age > 17) {
            console.log(theNameOfThePerson.name + " is allowed to go to the movie")
        } else {
            console.log(theNameOfThePerson.name + " cant go to the movies")
        }

// Silver Medal

if (1 === "1") {
    console.log("strict")
} else if (1 === 1) {
    console.log("loose")
} else {
    console.log("not equal at all")
}

if (1 <= 2 && 2 === 4) {
    console.log("yes")
}

if (3*4 > 10 && 5 + 10 > 10) {
    console.log("yessir")
}

// Gold Medal

console.log("dog" === "string");

console.log(typeof true === "boolean");

var thingOrOther = {
    name: "Juanita",
    age: 21
}
console.log(thingOrOther.name === "Juanita");

if ("a" < 1){
    console.log("a is better")
}

let number = 7;

switch(number){
    case 0:
        console.log("zero");
        break;
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
        break;
    case 6:
        console.log("six");
        break;
    case 7:
        console.log("seven");
        break;
    default:
        console.log("invalid day")
}

// Gold may take some googling! 
// X 1. Write an if statement that checks to see if "dog" is a string 
// X 2. Write an if statement that checks to see if "true" is a boolean 
// X 3. Write an if statement that checks to see if a variable has been defined or not 
// 4. Write an if statement comparing letters to numbers using < and >. Try to figure out 
// what letters are going to be "greater than" other numbers or letters. 
// 5. Write a switch statement that returns a number spelled out ("seven" vs 7) for the 
// numbers one through ten.