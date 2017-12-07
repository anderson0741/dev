// // Preliminaries

// for (var i = 0; i <= 9; i++){  
//     console.log(i);
// }

// for (var i = 9; i >= 0; i--){  
//     console.log(i);
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]
//     console.log(fruit[0])
//     console.log(fruit[1])
//     console.log(fruit[2])
//     console.log(fruit[3])

// //Bronze

// var vegitables = [ 
//     tomato = " tomato ",
//     pickle = " pickle ",
//     cucumber = " cucumber ",
//     zuccini = " zuccini ",
// ]
// console.log(tomato + pickle + cucumber + zuccini)

// for (var i = 0; i <= 100; i = i+2){  
//     console.log(i);
// }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]


// for(var i = 0; i < fruit.length; i = i+2){
//     console.log(fruit[i]);
// }

// // Silver

// // var peopleArray = [  
// //     {
// //       name: "Harrison Ford",
// //       occupation: "Actor"
// //     },
// //     {
// //       name: "Justin Bieber",
// //       occupation: "Singer"
// //     },
// //     {
// //       name: "Vladimir Putin",
// //       occupation: "Politician"
// //     },
// //     {
// //       name: "Oprah",
// //       occupation: "Entertainer"
// //     }
// // ]  

// //   for (var i = 0; i < peopleArray.length; i++) {  
// //     console.log(peopleArray[i].name);
// //   }

// //   for (var i = 0; i < peopleArray.length; i++) {  
// //     console.log(peopleArray[i].name);
// //     console.log(peopleArray[i].occupation);
// //   }

// // for(var i = 0; i < peopleArray.length; i = i+2){
// //     console.log(peopleArray[i].name);
// //         for (var i=1; i < peopleArray.length; i = i+2){
// //             console.log(peopleArray[i].occupation);
// //                 for (var i = 2; i < peopleArray.length; i = i+2){
// //                 console.log(peopleArray[i].name);
// //                     for (var i = 3; i < peopleArray.length; i = i+2){
// //                         console.log(peopleArray[i].occupation);
// //                 } 
// //             }
// //         }
// //     }

// // var peopleNameEven = [];
// // var peopleOccupationOdd [];

// // for (var i = 0; i < peopleNameEven; i++) {
// //     (i % 2 === 0) ? peopleNameEven.push(peopleArray[i].name): peopleOccupationOdd.push(peopleArray[i].occupation);
// // }
// // console.log(peopleNameEven, peopleOccupationOdd)

// // Michelles verion below
// // var newName = [];
// // var newOccupation = [];

// // for (i = 0, j = 1; i < peopleArray.length; i = i + 2, j = j + 2) {
// //     newName.push(peopleArray[i].name)
// //     newOccupation.push(peopleArray[j].occupation)
// //     console.log(newName);
// //     console.log(newOccupation);
// // }

// // Gold

// // var arr = [];
// // for (i = 0; i < 3; i++){
// //     arr.push([]);
// //         for (j = 0; j < 3; j++) {
// //             arr[i].push(0);
// //         }
// //     }
// // console.log(arr);

// // var arr = [];
// // for (i = 0; i < 3; i++){
// //     arr.push([]);
// //         for (j = 0; j < 3; j++) {
// //             arr[i].push(i);
// //         }
// //     }
// // console.log(arr);

// // var arr = [];
// // for (i = 0; i < 3; i++){
// //     arr.push([]);
// //         for (j = 0; j < 3; j++) {
// //             arr[i].push(j);
// //         }
// //     }
// // console.log(arr);


var arr = [];
for (i = 0; i < 10; i++){
    arr.push([]);
        for (j = 0; j < 4; j++) {
            arr[i].push(j);
        }
    }

console.log(arr);