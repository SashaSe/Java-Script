var fieldView = {
    messageHandler: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    choiceHandler: function(location) {
        var choice = document.getElementById(location);
        if (location == shipsStatus.shipLocation1 || location == shipsStatus.shipLocation2 || location == shipsStatus.shipLocation3) {
            choice.setAttribute("class", "hit");
            var text = "Hit!";    
            return text;
        }
        else {
            choice.setAttribute("class", "miss");
            var text = "Miss!";
            return text;
        }
    }
};

var controller = {
    textBox: 0,
    buttonHandler: function () {
        document.getElementById("fireButton").onclick = function() {
        var textBox = document.getElementById("guessInput").value;
        msg = fieldView.choiceHandler(textBox);
        fieldView.messageHandler(msg);
        }
    },
    start: function() {
        controller.buttonHandler();
        shipsStatus.shipLocationGenerator();
    }
};

var shipsStatus = {
    shipLocation1: 0,
    shipLocation2: 0,
    shipLocation3: 0,
    shipLocationGenerator: function () {
        var pos1 = [];
        var pos2 = [];
        var shipLocation = new Array(3);
        for (var i = 0; i < shipLocation.length; i++) {
            pos1[i] = Math.floor(Math.random()*6) + 1;
            pos2[i] = Math.floor(Math.random()*6) + 1;
            shipLocation[i] = "" + pos1[i] + pos2[i];
        }
        this.shipLocation1 = shipLocation[0];
        this.shipLocation2 = shipLocation[1];
        this.shipLocation3 = shipLocation[2];
    }
};
controller.start();