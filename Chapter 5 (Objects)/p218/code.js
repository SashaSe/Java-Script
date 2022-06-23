var car = {
    make: "Weville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

function prequal(car) {
    if(car.year > 1960 && car.mileage < 10000) {
        return true;
    }
        return false;  
}

var result = prequal(car);
if (result) {
    console.log("You gotta check out this " + car.make + " " + car.model);
   } else {
    console.log("You should really pass on the " + car.make + " " + car.model);
   }  //git test