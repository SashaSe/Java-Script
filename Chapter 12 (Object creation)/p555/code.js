function Car (make,model,year,color,passengers,convertible,mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = false;

    this.start = function() {
        this.started = true;
    };
    this.stop = function() {
        this.started = false;
    };
    this.drive = function() {
        if (this.started) {
            console.log(this.make + " " +
                this.model + " goes zoom zoom!");
        } else {
            console.log("Start the engine first.");
        }
    }
}

let chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
let cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
let taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
let fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);
let testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

let cars = [chevy, cadi, taxi, fiat, testCar];
for(let i = 0; i < cars.length; i++) {
    cars[i].start();
    for (let j = Math.floor(Math.random()*4)+1; j > 0; j--) {
        cars[i].drive();
    }
    cars[i].stop();
}