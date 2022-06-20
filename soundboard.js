var bell = new Audio("bicycle_bell.wav");
var bubbles = new Audio("bubbles_sfx.wav");
var cymbal = new Audio("cymbals.wav");

var button1 = document.getElementById('b1');
var button2= document.getElementById('b2');
var button3 = document.getElementById('b3');

button1.addEventListener('click', function () {
    bell.play();
})

button2.addEventListener('click', function () {
    bubbles.play();
})

button3.addEventListener('click', function () {
    cymbal.play();
})