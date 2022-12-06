let minius = document.getElementsByClassName('minius');
let second = document.getElementsByClassName('second');

let now = new Date();

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds()

document.getElementById("hours").innerHTML = h;
document.getElementById("minius").innerHTML = m;
document.getElementById("second").innerHTML = s;