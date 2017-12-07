// var recipe = function (ingredients) {
   // 1
    // var dish = ingredients + " water " + " heat ";
    // return dish;
//}
// console.log(recipe())

// 2
// var location = {
//     name: "kitchen",
//     recipeOnShelf: recipe
// }

// location.name = "grandma's house";

// 3
//     return "cooked meal";
// }

// recipe();
//}

// 4 and seperate from above
// var country = function(){
//     var president = "Patrick"
//     var state = function(){
//         var governor = "Celeste"
//         var city = function (){
//             var mayor = "Tyler";
//             console.log(mayor);
//         }
//         console.log(president);
//         console.log(governor);
//         // Mayor wont show up because it is outside of the function of mayor, and hasnt been called, so if we log it inside of the city function it will work
//         // console.log(mayor);
//         city();
//         // so we called it outside of the function, and moved the console.log into the function and now it shows up
//     }
//     state();
// }
// country();

// 5 and seperate from above
// var add = function(){
//     var num1 = 67;
//     var num2 = 68;
//     var num3 = 69;
//     return num1 + num2 + num3;
// }
// console.log(add());

// // better way to write it
// var add1 = function(num01, num02, num03){
//     return num01 + num02 + num03;
// }
// console.log(add1(67,68,69));

// 6
// var unpack = function (box){
//     return box.content;
// }

// // box below is a globale variable box, the one above is just inside a function
// // var box = {
// var boxOClothes = {
//     content: ["socks", "spiderman costume", "lint", "spider"],
//     belongsTo: "Erica"
// }

// var boxOToys = {
//     content: "toys"
// }

// // var dresser = unpack(box);
// var dresserContents = unpack(boxOClothes);
// var toyChest = unpack(boxOToys);
// // at this point we need to console.log it, and it will return "clothes"
// console.log(dresserContents, toyChest);

// // arguement is going to be in a called function, paramater is inside a function

// 7
// linked to page
console.log(window);

var input = document.getElementById("input");
var submit = document.getElementById("submit");
var display = document.getElementById("display");

// input.onfocus = function(){
//     input.style.backgroundColor = "pink"
// }

submit.onclick = function(event){
    if(input.value != ""){
        // console.log(event);
        var inputText = input.value;
        var li = document.createElement("li");
        var txtNode = document.createTextNode(inputText);
        li.appendChild(txtNode);
        display.appendChild(li);
        input.value = "";
    }

}
