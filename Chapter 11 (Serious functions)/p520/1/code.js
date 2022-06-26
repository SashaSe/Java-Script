function makePassword(password) {
    return function checkPassword (passwordGuess) {
    return (passwordGuess === password);
    };
}

function init() {
    controller.start();
}

controller = {
    passIsValid: "" ,
    start: function() {
        let inputBox;
        let userPassword;
        let checkPassword;
        let passIsValid;
        const savePassButton = document.getElementById("confirmButton");
        const checkPassButton = document.getElementById("checkPasswordButton");
        const resultText = document.getElementById("resultText");
        const link = document.getElementById("link");
        savePassButton.onclick = function buttonHandler() {
            inputBox = document.getElementById("passwordField").value;
            userPassword = inputBox;
            savePassButton.setAttribute("disabled","");
            checkPassButton.removeAttribute("disabled");
            checkPassword = makePassword(userPassword);
            passCheck(userPassword,checkPassword);
                function passCheck (userPassword,checkPassword) {
                    const button1 = document.getElementById("checkPasswordButton");
            }
        }
        checkPassButton.onclick = function button1Handler() {
            inputBox = document.getElementById("passwordField").value;
            passIsValid = checkPassword(inputBox);
            this.passIsValid = passIsValid;
            if (passIsValid) {
                resultText.innerHTML = "Password is correct";
                link.setAttribute("class","");
                resultText.setAttribute("class","");
            }
            else if (!passIsValid) {
                do {
                    resultText.setAttribute("class","wrongPass");
                    resultText.innerHTML = "Wrong password! Try again!";
                    this.reCheck();
                }   while (!passIsValid)
            }
        }
    },
    reCheck: function() {
        let inputBox;
        const resultText = document.getElementById("resultText");
        checkPassButton.onclick = function reCheck() {
            inputBox = document.getElementById("passwordField").value;
            passIsValid = checkPassword(inputBox);
            this.passIsValid = passIsValid;
        }
    }
}

window.onload = init();
