const passengers = [    {name: "Jane Doloop", paid: true , blackList: false},
                        {name: "Dr. Evel", paid: true , blackList: false},
                        {name: "Sue Property", paid: true , blackList: true},
                        {name: "John Funcall", paid: false , blackList: false},
                        {name: "John Kennedy", paid: false , blackList: true},
                        {name: "Jeorge Washinghton", paid: true , blackList: false}];



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

processPassengers(checkBlackList,checkNotPaid,passengers);