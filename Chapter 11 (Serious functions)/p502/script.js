function inject(patientName, time, dosage) {
    let text = document.getElementById("injectText");
    text.innerHTML = patientName + " has injected " + dosage + " g. at " + time;
    return true;
}

let button = document.getElementById("button");

button.onclick = function () {
    const dosage = prompt("Enter dosage: ");
    const patient = prompt("Enter patient name: ");
    let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let completeStatus = inject(patient,time, dosage);
    if (completeStatus) {
        button.setAttribute("id" , "inactive");
        button.innerHTML = " ";
    }
};