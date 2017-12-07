
var shopper = {
    name: "Tom",
    age: 23,
    cart: ["apple", "pear", "toothpaste", "toothbrush"],
    total: function (){
        return name + " who is " + age + " went to the store to buy " + cart
    }
}

console.log("shoopper is", shopper.name)
console.log(shopper.name, " is ", shopper.age, " years old")
console.log(shopper.name, "is going to the store to buy", shopper.cart)
