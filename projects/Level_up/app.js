let vid = document.getElementById("intro_video"); 
vid.volume = 0.09;
// var doc = aEvent.originalTarget
function playVid() { 
    vid.play(); 
} 
function pauseVid() { 
    vid.pause(); 
}


function formAlert(){
    let call = document.getElementById("call").value;    
    alert("Call 801-555-5555");
    console.log("call");
}
call.addEventListener("click", formAlert);

let submit = document.getElementById("submit");
submit.onclick = function(){
    var sign = document.getElementById("sign-up");
    alert(sign.value + " has been added to our mailing list");
}