function init () {
    var planet = document.getElementById("greenplanet");
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.setAttribute("class", "redtext");
    var output = planet.getAttribute("class");
    if (output != null) {
        console.log(output);
    }
    else {
        console.log("No such attribute in element ");
    }
}

window.onload = init;