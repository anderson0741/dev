let data = [{
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
}, {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
},
{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
},
{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
},
{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
},
{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
},
{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
},
{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
},
{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
}, {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
}, {
    firstName: "Morty",
    lastName: "Smith",
    age: 13
}, {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
}
];

let sortByAge = (arr) => {
return arr.sort((p1, p2) => p1.age - p2.age);
}

let displayToHtml = (arr) => {
let sortedPeeps = sortByAge(arr);
sortedPeeps.forEach((person, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${person.firstName} ${person.lastName} is ${person.age}`;
    let id = document.createAttribute("id");
    id.value = i;
    li.setAttributeNode(id);
    li.setAttribute("class", "monkey-juice");
    document.getElementById("list").appendChild(li);
});
}
displayToHtml(data);