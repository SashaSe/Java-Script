window.onload = init;

function init () {
    const images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
    }
    
}

function showAnswer (eventObj) {
    let img = eventObj.target;
    let imgName = img.id;
    let imgNameFin = "img/" + imgName + ".jpg";
    img.src = imgNameFin;
    setInterval(() => {
        img.src = "img/" + imgName + "blur.jpg";
    }, 2000);
} 
