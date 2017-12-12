function genPass(int){
    // let characters = "abcdefghijklmnopqrstuvwxyzABCDEFG"
    var output = "";
    for(var i = 0; i < int; i++){
        output += String.fromCharCode(Math.floor(Math.random() * 93) +33);
    }
    return output
}

// console.log(String.fromCharCode());
console.log(genPass(7));