window.onload = init;

function init () {
    let img0 = document.getElementById("zero");
    img0.onclick = showAnswer0;
    let img1 = document.getElementById("one");
    img1.onclick = showAnswer1;
    let img2 = document.getElementById("two");
    img2.onclick = showAnswer2;
    let img3 = document.getElementById("three");
    img3.onclick = showAnswer3;
    let img4 = document.getElementById("four");
    img4.onclick = showAnswer4;
    let img5 = document.getElementById("five");
    img5.onclick = showAnswer5;
    
}

function showAnswer0 () {
    let img = document.getElementById("zero");
    img.src="img/zero.jpg";
}

function showAnswer1 () {
    let img = document.getElementById("one");
    img.src="img/one.jpg";
}

function showAnswer2 () {
    let img = document.getElementById("two");
    img.src="img/two.jpg";
}

function showAnswer3 () {
    let img = document.getElementById("three");
    img.src="img/three.jpg";
}

function showAnswer4 () {
    let img = document.getElementById("four");
    img.src="img/four.jpg";
}

function showAnswer5 () {
    let img = document.getElementById("five");
    img.src="img/five.jpg";
}