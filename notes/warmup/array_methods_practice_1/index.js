// let sortedOfAge = (arr) => {
//   arr = arr.filter((person) => {
//     return person.age >= 18;
//   });
//   return arr.sort((person1, person2) => {
//     return person1.lastName.localeCompare(person2.lastName);
//   });
//   //   person1 = person1.lastName;
//   //   person2 = person2.lastName;
//   //   if (person1 < person2) {
//   //     return -1;
//   //   } else if (person1 > person2) {
//   //     return 1;
//   //   } else {
//   //     return 0;
//   //   }
//   // })
// }

// module.exports = sortedOfAge;

//sort the array
//loop through array and create li tags and text nodes containing the person info
//shove those nodes into the li tags
//shove li tags onto ul tags

//and boom goes the dynamite


let sortByAge = (arr) => {
  return arr.sort((p1, p2)=> p1.age -p2.age);
}
let displayToHtml = (arr) => {
  let sortedPeeps = sortByAge(arr); 
}

console.log(displayToHtml);