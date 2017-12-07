var food = [];

food.push("Banana");
food.push("Apple");
food.push("Orange");
food.push("Lettuce");
food.push(1);
food.splice(0,1)
food.push("Carrot");
food.push("Tomato");
food.push("Pepper");
food.push("Lettuce");
food.pop();
food.push(3);
food.splice(3,2);
food.reverse();

for(var i = 0; i < food.length; i++){
    console.log(food[i]);
}

// Michelles work below

// var fruits = ["banana", "apple", "orange", "watermelon"]
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// console.log("fruits: ", fruits);
// console.log("vegetables: ", vegetables);

// var removeLastVegetables = vegetables.pop();
// console.log("vegetables poped: ", vegetables);

// var removeFirstFruits = fruits.shift();
// console.log("fruits shifted: ", fruits);

// var indexOrange = fruits.indexOf("orange");
// console.log(indexOrange,fruits);

// var addNumberEndFruits = fruits.push(indexOrange);
// console.log("fruits pusheded: ", fruits);

// console.log(vegetables.length);

// var addNumberEndVegetables = vegetables.push(vegetables.length);
// console.log("vegetables: ",vegetables);

// var food = fruits.concat(vegetables);
// console.log("food: ",food);

// food.splice(4,2);
// console.log("food: ",food);

// food.reverse();
// console.log("food: ",food);



