
var i = 0;
var txt = "שלום, אני זואי       ";
var speed = 300;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("greet").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

function reAnimate() {
    document.getElementById("greet").innerHTML = '';
    i = 0;
    typeWriter();
}