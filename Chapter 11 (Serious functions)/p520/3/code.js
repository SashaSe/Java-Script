function makeCounter() {
    let count = 4;
    return result = {
        increment: function() {
            count++;
            return count;
        }
    }
}

let counter = makeCounter();
console.log(counter.increment());