let ip1 = getRandomInt();
let ip2 = getRandomInt();
let ip3 = getRandomInt();
let ip4 = getRandomInt();
let fullIp = ip1 + "." + ip2 + "." + ip3 + "." + ip4;

function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(251);
    return Math.floor(Math.random() * (max - min)) + min;
}
function realIp() {
    let nums = fullIp.split(".");
    for()
    if (fullIp >= 0 && fullIp <= 255) {
        return true;
    } else {
        return false
    }
}

console.log(realIp(fullIp), fullIp);
