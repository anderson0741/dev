let database = [{
        name: "Zebra",
        age: 29
    },
    {
        name: "Celeste",
        age: 75
    },
    {
        name: "Luke",
        age: 16
    },
    {
        name: "Matt",
        age: 25
    },
    {
        name: "Ken",
        age: 9
    },
    {
        name: "Adam",
        age: 23
    }
];

// filter forEach map
database.forEach(function (person, i) {
    console.log(i + ":" + person.name);
})

let alphabetizeDatabase = database.sort(function (person1, person2) {
    person1 = person1.name.toLowerCase();
    person2 = person2.name.toLowerCase();
    if (person1 < person2) {
        return -1;
    } else if (person1 > person2) {
        return 1;
    } else {
        return 0;
    }
})

alphabetizeDatabase.forEach(function (person) {
    console.log(person.name);
})

// let sortNumber = database.sort(function (a, b) {
//     a = a.age;
//     b = b.age;
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// })

// sortNumber.forEach(function (person) {
//     console.log(person.age, person.name);
// })

// let avg = database.age.reduce(function(total, num){
//     return total + num;
// }) / database.age.length;
// console.log(avg);

// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce(function (total, num) {
//     return total + num;
// }, 1)

// console.log(sum);

// let evenNumbers = numbers.reduce(function (total, num) {
//     if (num % 2 === 0) {
//         return total + 1;
//     } else {
//         return total;
//     }
// }, 0)

// console.log(evenNumbers);