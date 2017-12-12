var name = document.getElementById("name");
var age = document.getElementById("age");
var birthday = document.getElementById("birthday");
var gender = document.getElementsByName("gender");
var favorites = document.getElementsByClassName("favorite");

var form = document.getElementById("form");
var output = {};

function getsGender() {
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return gender[i].value
        }
        return "incomplete";
    }
}

function getFavorites() {
    var output = [];
    for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].checked) {
            output.push(favorites[i].value);
        }
    }
    return output;
}

function beautify() {

    return "First Name: " + output.name + "\nAge: " + output.age + "\nBirthday: " + output.birthday + "\nGender: " + output.gender + "\nFavorites: " + output.favorites.join(", "); 
}

function submit() {
    output.name = name.value;
    output.age = age.value;
    output.birthday = birthday.value;
    output.gender = getsGender();
    output.favorites = getFavorites();
    alert(beautify());

}
form.onsubmit = submit;