// function Animal() {
//     this.hasCellWall = false;
// }

// Animal.prototype.print = function(){
//     for(key in this){
//         if(this.hasOwnProperty(key)){
//             console.log(`${key}: ${this[key]}`);
//         }
//     }
// }

// function Mammal() {
//     Animal.call(this);
//     this.hasFur = true;
// }
// Mammal.prototype = Object.create(Animal.prototype);

// class Animal {
//     constructor(name) {
//         this.hasCellWall = false;
//         this.name = name;
//     }
//     print() {
//         for (let key in this) {
//             if (this.hasOwnProperty(key)) {
//                 console.log(`${key}: ${this[key]}`);
//             }
//         }
//     }
// }

// class Mammal extends Animal {
//     constructor(name, furType){
//         super(name);
//         this.hasFur = true;
//         this.furType = furType;
//     }
// }

// let coyote = new Animal("coyote");
// let whale = new Mammal("whale", "whaleHair");
// whale.print();
// coyote.print();

//make two contructor functions
//one must inherit from the other
//add a prototype print() method to the parent
// make an instance of each and call their print methods

//do the same using es6 class syntax


// function Tank(){
//     this.hasEngine = true;
// }

// Tank.prototype.print = function(){
//     for(key in this){
//         if(this.hasOwnProperty(key)){
//             console.log(`${key}: ${this[key]}`)
//         }
//     }
// }

// function Car(){
//     Tank.call(this);
//     this.hasTires = true;
// }

// Car.prototype = Object.create(Tank.prototype);





let Chevy = new Car();
Chevy.print();