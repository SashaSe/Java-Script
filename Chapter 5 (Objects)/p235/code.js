var eightBall = { 
    index: 0,
    advice: ["yes", "no", "maybe", "not a chance"],
    shake: function() {
    this.index++;
    if (this.index >= this.advice.length) {
    this.index = 0;
    }
    },
    look: function() {
    return this.advice[this.index]; //Math.floor(Math.random()*4)
    }
};

eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());