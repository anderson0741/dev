// function shareDigits(num1, num2){
//     if (Number(num1 % 10) === Number(num2 % 10)){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(shareDigits(3, 13))

function shareDigits(int1,int2) {
    if (int1 < 0 || int2 < 0); 
    throw "Inputs cannot be less than zero";
    return int1 % 10 === int2 % 10;
}

console.log(shareDigits(-3, 13));