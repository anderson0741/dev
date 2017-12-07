var pullOutDrawer = function(drawer, index){
return this[drawer][index];
}
var dresser = {
    topDrawer: ["passport", "keys", "Shot gun"],
    midDrawer: ["shirts"],
    bottomDrawer: ["jeans", "shoes", "socks", "etc"],
    // pullOutDrawer: function(drawer, index){
    //     return dresser[drawer][index];
    // }
    dresserAction: pullOutDrawer
}
var kidsDresser = {
    topDrawer: ["star wars socks", "footie pajamas"],
    midDrawer: ["shirts", "pet rock"],
    bottomDrawer: ["jeans", "shoes", "socks", "etc"],
    // pullOutDrawer: function(drawer, index){
    //     return kidsDresser[drawer][index];
    // }
    dresserAction: pullOutDrawer
}
    //________________________________________
    // pullOutDrawer: function(drawer, index){
    //     if(drawer === "topDrawer"){
    //        return dresser.topDrawer[index];
    //     } else if(drawer === "midDrawer"){
    //         return dresser.midDrawer[index];
    //     } else {
    //         return dresser.bottomDrawer[index];
    //     }
    // }
    //___________________________________________
// }

console.log(kidsDresser.dresserAction("bottomDrawer", 2))
console.log(kidsDresser.dresserAction("topDrawer", 1))
console.log(dresser.dresserAction("topDrawer", 0))
console.log(dresser.dresserAction("topDrawer", 1))
console.log(dresser.dresserAction("topDrawer", 2))
console.log(dresser.dresserAction("midDrawer", 0))

// var dresser = {
//     topDrawer: "keyswalletpassport",
//     midDrawer: "magazineducttape",
//     bottomDrawer: "jeans onesie gumwrapper"
// }

// split everywhere
// console.log(dresser.bottomDrawer.split(""));
// console.log(dresser.bottomDrawer.split(" "));
// split by every space
// console.log(dresser.midDrawer.concat());
// console.log(dresser.bottomDrawer.split("onesie"));
// splits by the word
