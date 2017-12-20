let vid = document.getElementById("intro_video"); 
vid.volume = 0.09;
var doc = aEvent.originalTarget
function playVid() { 
    vid.play(); 
} 
function pauseVid() { 
    vid.pause(); 
}

// video.addEventListener('loadeddata', function(){
//     video.play();
// });
// video.addEventListener('pause', function(){
//     video.play();
// })