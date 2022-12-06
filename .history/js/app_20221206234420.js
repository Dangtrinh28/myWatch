function myTime() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  document.getElementById("hours").innerHTML = h;
  document.getElementById("minius").innerHTML = m;
  document.getElementById("second").innerHTML = s;

  setTimeout("myTime()",1000);
}

myTime()