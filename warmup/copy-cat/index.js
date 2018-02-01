// let person = {name: "Joe"};
// let copyObj = {};



// function copyCat(obj){
//     return Object.assign(copyObj, obj)
//     return copyObj 
// }

// console.log(copyCat(person));


// person.name = "Jane"

// console.log(person);
// console.log(copyObj);

//bens method
let makeCopy = obj =>{
    //hard way
    let output = {};
    for (let key in obj){
        output[key] = obj[key]
    }
    return output;
    //easy way below
    // return Object.assign(obj);
}

let inputObj = {
    propertyName: 'someValue',
    anotherProperty: "anotherValue"
}

let copyObj = makeCopy(inputObj);

console.log(copyObj);
