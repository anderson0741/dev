// let getDetails = function () {
//     let w = window,
//         d = document,
//         e = d.documentElement,
//         g = d.getElementsByTagName('body')[0],
//         x = w.innerWidth || e.clientWidth || g.clientWidth,
//         y = w.innerHeight || e.clientHeight || g.clientHeight;
//     return {
//         x: x,
//         y: y
//     }
// }

// let cards = document.getElementsByClassName("card");
// for (let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener("mouseover", function () {
//         let details = getDetails();
//         this.style.position = "absolute";
//         this.top = details.y;
//         this.left = details.x;
//         this.style.zIndex = 900;
//     });
//     cards[i].addEventListener("mouseleave", function () {
//         this.style.zIndex = 0;
//         this.style.position = "relative";
        
//     });
// }