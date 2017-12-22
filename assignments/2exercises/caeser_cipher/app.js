// const readline = require("readline-sync");

// var caesarShift = function (str, amount) {
//     if (amount < 0) {
//         return caesarShift(str, amount + 26);
//     }
//     var output = "";
//     for (var i = 0; i < str.length; i++) {
//         var c = str[i];
//         if (c.match(/[a-z]/i)) {
//             var code = str[i];
//             if ((code >= 65) && (code <= 90)) {
//                 c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
//             } else if ((code >= 97) && (code <= 122)) {
//                 c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
//             }

//         }
//         output += c;
//     }
//     return output;
// }

// caesarShift("Attack at dawn!", 12);


function rot13(str) {
  var newString = [];

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      newString.push(str.charAt(i));
    } else if (str.charCodeAt(i) > 77) {
      newString.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      newString.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
  }
  return newString.join("");
}

rot13("attack at dawn")