// var questionOne = function(){
//     return 1 + 2;
// }
// console.log(questionOne());


function questionTwo (num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

console.log(questionTwo(10, 9, 3));

var questionThree = function(number) {
    // Your code goes here!
    if (((number/2) - Math.floor(number/2)) === 0) {
        return "even";
        } else {
            return "odd";
        };
  }; 
  console.log(questionThree(6));

var str = "juan went on a trip in his favorite rocket ship";
var questionFour = function() {
    if (str.length < 20){
        return str + str;
    } else { 
        return str.slice(0, str.length/2);
    }
}
    console.log(questionFour());

