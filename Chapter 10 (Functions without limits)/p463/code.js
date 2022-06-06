const passengers = [    {name: "Jane Doloop", paid: true , blackList: false},
                        {name: "Dr. Evel", paid: true , blackList: false},
                        {name: "Sue Property", paid: true , blackList: true},
                        {name: "John Funcall", paid: false , blackList: false},
                        {name: "John Kennedy", paid: false , blackList: true}];

function passengersCheck (passengersList) {
    const ticketProblem = " Didn't pay for the ticket!";
    const blackList = " - Blacklisted";
    for(let i = 0; i < passengersList.length; i++) {
        if (passengersList[i].paid != true && passengersList[i].blackList) {
            console.log(passengersList[i].name + blackList + " and" + ticketProblem);
        }
        else if(passengersList[i].paid != true || passengersList[i].blackList) {
            if (passengersList[i].blackList) {
                console.log(passengersList[i].name + blackList);
            }
            else {
                console.log(passengersList[i].name + ticketProblem);
            }   
        }
        else if (i == passengersList.length-1 && passengersList[i].paid == true) {
            console.log("Everything is ok with passengers!");
        }
    }
}

passengersCheck(passengers);