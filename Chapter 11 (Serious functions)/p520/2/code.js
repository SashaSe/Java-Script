function multN(n) {
    return function getResult(num) {
    return num*n;
    };
   }

let getResult = multN(2);
console.log(getResult(3));
console.log(getResult(3));