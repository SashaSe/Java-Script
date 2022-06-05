function init () {
    document.onmousemove = handleMouseMove;
}

function handleMouseMove (event) {
    if (event.screenX < 576 && event.screenX > 547 && event.screenY < 211 && event.screenY > 204) {
        let text = document.getElementById("text");
        console.log(event.screenX , event.screenY);
        text.innerHTML = "Coordinates: 10,20";
    }
}

window.onload = init;
