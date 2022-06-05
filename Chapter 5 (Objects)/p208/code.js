// var cadi = {
//     make: "General Motors",
//     model: "Cadillac",
//     year: 1955,
//     color: "Tan",
//     passengers: 5,
//     convertible: false,
//     mileage: 12892
// };___p 213___

var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
   };
   var bark;

   if (dog.weight > 20) {
    bark = "WOOF WOOF";
   } else {
    bark = "woof woof";
   }
   var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
   console.log(speak);
   