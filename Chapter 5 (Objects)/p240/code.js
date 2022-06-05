var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    fuel: 0,
    start: function() {
    if (this.fuel > 0) {
        this.started = true;
    }
    else {
        alert("Fuel tank is empty");
    }
    },
    stop: function() {
    this.started = false;
    },
    drive: function() {
    if (this.started) {
    alert("Zoom zoom!");
    this.fuel--
        if (this.fuel <= 0) {
            this.started = false;
            alert("Fuel tank is empty");
        }
    } else {
    alert("You need to start the engine first.");
    }
    },
    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    },
    checkFuel: function () {
        var output = alert(this.fuel + "l  left");
        return output;
    }
};

function addFuel() {
    var amount = prompt("Enter fuel amount");
    amount = parseInt(amount);
    fiat.addFuel(amount);
    var check = prompt("Check new fuel level (y or n)");
    fuelLevelCheckConfirm(check);
}

function fuelLevelCheckConfirm(check) {
    if (check == "y" || check == "Y") {
        var output = fiat.checkFuel();
    }
}

addFuel();
fiat.start();
fiat.drive();
fiat.drive();