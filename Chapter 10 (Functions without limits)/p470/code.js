const passengers = [    {name: "Jane Doloop", paid: true , blackList: false, ticket: "coach"},
                        {name: "Dr. Evel", paid: true , blackList: false, ticket: "coach"},
                        {name: "Sue Property", paid: true , blackList: true, ticket: "firstclass"},
                        {name: "John Funcall", paid: false , blackList: false, ticket: "coach"},
                        {name: "John Kennedy", paid: false , blackList: true , ticket: "firstclass"}, 
                        {name: "Jeorge Washinghton", paid: true , blackList: false, ticket: "coach"}];



function checkBlackList (passengersList,i) {
        if(passengersList[i].blackList) {
            return true;
        }
    return false;
}

function checkNotPaid (passengersList,i) {
        if(!passengersList[i].paid) {
            return true;
        }
    return false;
}

function processPassengers (blackListed,notPaid,passengersList) {
    for (let i = 0; i < passengersList.length; i++) {
        const blackListedRes = blackListed(passengersList, i);
        const notPaidRes = notPaid(passengersList, i);
        if (blackListedRes && notPaidRes) {
            console.log(passengersList[i].name + " blacklisted and not paid");
        }
        else if (blackListedRes || notPaidRes) {
            if (blackListedRes) {
                console.log(passengersList[i].name + " blacklisted");
            }
            else {
                console.log(passengersList[i].name + " not paid");
            }
        }
        else if (!blackListedRes && !notPaidRes) {
            console.log(passengersList[i].name + " has no problems with flight");
        }
        else if (i == passengersList.length-1){
            console.log ("Everything is ok with passengers!");
        }
    }
}

function servePassengers (passenger) {
    createDrinkOrder(passenger);
}

function createDrinkOrder (passenger) {
    let num = prompt("Enter passenger number");
    if (passenger[num].ticket == "firstclass") {
        console.log("Do you want cocktail or wine?")
    }
    else {
        console.log("Do you want water or cola?");
    }
}

processPassengers(checkBlackList,checkNotPaid,passengers);
servePassengers(passengers);