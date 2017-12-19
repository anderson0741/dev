// var param3 = "this is very important";
// function myFunc(param1, param2){
//     //params are only known within body of function
//     console.log(param3, param1, param2);
// }

// myFunc(1,2);

function TickyTackTemplate() {
    this.sqrFt = 3000;
    this.bedrooms = 4;
    this.bathrooms = 3.5;
    this.garage = 7;
    this.redRum = true;
}

function CustomTemplate(sqrFt, bedrooms, bathrooms, garage, redRum) {
    this.squareFeet = sqrFt;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.garage = garage;
    this.redRum = redRum;
}

function CustomTemplateWithAddOns(sqrFt, bedrooms, bathrooms, garage, redRum, detatchedGarage, pool, color, underwaterObservatory) {
    CustomTemplate.call(this, sqrFt, bedrooms, bathrooms, garage, redRum);
    this.detatchedGarage = detatchedGarage;
    this.pool = pool;
    this.color = color;
    this.underwaterObservatory = underwaterObservatory;
}

CustomTemplateWithAddOns.prototype = new Object(CustomTemplate.prototype);

var samanthasNewHouse = new TickyTackTemplate();
var tylersNewHouse = new CustomTemplate(300, .5, 0, 0, true);
var coltonsNewHouse = new CustomTemplateWithAddOns(7500, 11, 11, 87, false, 3, 2, "red", 2);

console.log(samanthasNewHouse, tylersNewHouse, coltonsNewHouse);

// var emptyBin = {

// }

// emptyBin.contents = "fish eggs";
// console.log(emptyBin);