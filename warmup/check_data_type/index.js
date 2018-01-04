// function checkTypes(arr){
//     if(arr[0] === arr[1] || arr[0] === arr[2]){
//         console.log(typeof 'true')
//     }

// }

// const one = [[1,2,3], ['a','b','c'],[true, true, true]]
// checkTypes(one);

// const two = [[true, false, true], [false,false,true]]
// checkTypes(two);

//use typeof operator
console.log(typeof "this is a string");

console.log([1,2,3].every((num) => {
    return num> 10;
}));


function checkTypes(arr) {
    let initial = arr[0][0];
    return arr.every(subArr =>
        subArr.every(value =>
            typeof (value) === typeof (initial)
        )
    )
}

const one = [[1,2,3], ['a','b','c'],[true, true, true]]
checkTypes(one);

const two = [[true, false, true], [false,false,true]]
checkTypes(two);

