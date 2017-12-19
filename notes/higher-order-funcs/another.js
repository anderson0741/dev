//1
// let ornaments = ["stars", "angels", "plombous", "snowman", "candy canes", "wisemen", "penguins"];

// //filter by words that start with a p
// function ornamentP (ornament, i){
//     // return ornament[0] === "p";
//     return i % 2 !==0;
// }
// let filterOrnaments = ornaments.filter(ornamentP)
// filterOrnaments.push("beads");

// console.log(filterOrnaments);


//2
// let desserts = ["cheesecake", "chocolate cake", "brownies", "ice cream", "apple pie", "batter", "RBPG", "eggy pie", "flan"];

// function upperCase(str){
//     return str.toUpperCase();
// }

// let upperCaseDesserts = desserts.map(upperCase)

// console.log(upperCaseDesserts);

//3
let contactList = [

]

let names = ["ben", "sam", "ken", "brayan", "lesa"];
let age = [21, 32, 46, 12, 30];
let occupation = ["doctor", "engineer", "sewage control", "bass player", "people watcher"];

function genNum(){
    return Math.floor(Math.random() * 5);
}

function Contact(){
    this.name = names[genNum()];
    this.age = age[genNum()];
    this.occupation = occupation[genNum()];
}

function genData(){
    for(let i = 0; i < 100; i++){
        let newContact = new Contact();
        contactList.push(newContact);
    }
}

genData();
 
function genDOMContact(contact){
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h5");
    h3.innerHTML = "Name: " + contact.name;
    h4.innerHTML = "Age: " + contact.age;
    h5.innerHTML = "Occupation: " + contact.occupation;
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    return div;
}

let DOMdata = contactList.map(genDOMContact);

function appendChildren(childDiv){
    let contacts = document.getElementById("contacts");
    contacts.appendChild(childDiv);
}
DOMdata.forEach(appendChildren)