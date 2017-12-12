elButton.onclick = function(){

// var elButton = document.getElementById("elButton");
var firstName = document.getElementById("firstName");
var lasName = document.getElementById("lastName");
var age = document.getElementById("age");
// var male = document.getElementById("male");
// var female = document.getElementById("female");
var veg = document.getElementById("veg").checked;
var kosh = document.getElementById("kosh").checked;
var lac = document.getElementById("lac").checked;
var der = document.getElementById("der").checked;
var gender = document.querySelector('input[name=gender]:checked').value;
var locations = document.getElementById("locations").value;


    alert("First Name: " + firstName.value + "\nLast Name: " + lastName.value +"\nAge: " 
    + age.value +"\nGender: " + gender + "\nLocation: " + locations + "\nDietary restrict: " + veg 
    + kosh + lac + der); 
};


firstName.onmouseover = function () {
    firstName.style.backgroundColor = "yellow";
};
firstName.onmouseleave= function () {
    firstName.style.backgroundColor = "ivory";
};

lastName.onmouseover = function () {
    lastName.style.backgroundColor = "yellow";
};
lastName.onmouseleave= function () {
    lastName.style.backgroundColor = "ivory";
};

age.onmouseover = function () {
    age.style.backgroundColor = "yellow";
};
age.onmouseleave= function () {
    age.style.backgroundColor = "ivory";
};

locations.onmouseover = function () {
    locations.style.backgroundColor = "yellow";
};
locations.onmouseleave= function () {
    locations.style.backgroundColor = "ivory";
};

elButton.onmouseover = function () {
    elButton.style.backgroundColor = "lightgreen";
};
elButton.onmouseleave= function () {
    elButton.style.backgroundColor = "ivory";
};

