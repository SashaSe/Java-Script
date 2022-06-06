window.onload = init;

function init () {
    let img0 = document.getElementById("zero");
    img0.onmouseover = showAnswer0;
    img0.onmouseout = reblur;
    
    let img1 = document.getElementById("one");
    img1.onmouseover = showAnswer1;
    img1.onmouseout = reblur;

    let img2 = document.getElementById("two");
    img2.onmouseover= showAnswer2;
    img2.onmouseout = reblur;

    let img3 = document.getElementById("three");
    img3.onmouseover = showAnswer3;
    img3.onmouseout = reblur;

    let img4 = document.getElementById("four");
    img4.onmouseover = showAnswer4;
    img4.onmouseout = reblur;

    let img5 = document.getElementById("five");
    img5.onmouseover = showAnswer5;
    img5.onmouseout = reblur;
    
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

function reblur (eventObj) {
    let img = eventObj.target;
    let imgName = img.id;
    let imgNameFin = "img/" + imgName + ".jpg";
    img.src = imgNameFin;
    img.src = "img/" + imgName + "blur.jpg";
}