function fizzBuzz(n){
    var output = [];
    // add something to the array n times
    for(let i = 1; i <=n; i++){
        if (i % 15 === 0){
        output.push("fizzbuzz")
    } else if (i % 3 === 0) {
        output.push("Fizz")
    } else if (i % 5 === 0) {
        output.push("Buzz")
    } else {
        output.push(String(i));
    }
   
    }

    return output;
}
    //     if (n % 15 == 0){
//         console.log("fizzbuzz");
//     } else if (n % 3 == 0) {
//         console.log("Fizz");
//     } else if (n % 5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }
console.log(fizzBuzz(15))