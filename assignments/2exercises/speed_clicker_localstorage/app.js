const hitme = document.getElementById("hitme");
const clickView = document.getElementById("nombre");


let counter = JSON.parse(localStorage.getItem("counter")) || 0;

clickView.innerHTML = counter;

let plusClick = () => {
    counter++;
    localStorage.setItem("counter", JSON.stringify(counter));
    clickView.innerHTML = counter;
}

hitme.onclick = plusClick;

