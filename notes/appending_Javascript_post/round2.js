function Dog(name, breed, color, age, barkSound){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.age = age;
    this.barkSound = barkSound;
}

Dog.prototype.bark = function(){
    return this.barkSound;
}

function Wolf(name, breed, color, age, barkSound){
    Dog.call(this, name, breed, color, age, barkSound);

}

Wolf.prototype.bark = function(){
    return this.barkSound.toUpperCase() + "!!!!!!!!";
}

var myDog = new Dog("Fabio Alfonso Schnorkavich", "Rat Lab", "Black", 1, "arf! arf! arf! arf! arf! arf! arf! arf! arf! (continued annoyance)");
var yourDog = new Dog("Buckeye", "Chocolate Lab", "Brown", 1, "woofers");
var myWolf = new Wolf("Ginger", "Siberian", "white", 3, "Bork Bork")
// console.log(myDog);
// console.log(yourDog);

// myDog.bark();
// myWolf.bark();

function testDog(dog){
    if(dog.bark().includes("!")){
        console.log("Shut up you Rat!!!!")
    } else {
        console.log("Ill take it!");
    }
    dog.bark();
}

testDog(myDog);
testDog(yourDog);
testDog(myWolf);