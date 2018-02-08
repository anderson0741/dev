var removeDups = function(str){
    var output = {
        noDups: "",
        dups: ""
    }
//     //does the stuff

//iterate through the string
for(var i = 0; i < str.length; i++){
    if(output.noDups.indexOf(str[i]) < 0){
        output.noDups += str[i];
        }  else {
            output.dups += str[i];
        }
    }

    return output;
}

console.log(removeDups("bookkeeper larry"))
// console.log("donkeypunch".indexOf("n"))
// will return 2 because there are 2
// console.log("donkeypunch".indexOf("x"))
// will return -1 because there are none

//------------------------------------------------------------------
// function unique(str) {
//     var result = '';
//     for(var i = 0; i < str.length; i++) {
//       if(result.indexOf(str[i]) < 0) {
//         result += str[i];
//       }
//     }
//     return result;
//   }
  
//   console.log(
//     unique('abcdab'),
//     unique('aaabbc'),
//     unique('sssssssssssssstttttttttttttaaaaaaaaaaaannnnnnnnnnnnnggggggggggggggg')
//   );