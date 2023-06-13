// ecmascript7 nace en 2016
// ECMAScript 2016(ES7) introduced only two new features:
// Array.prototype.includes()
// Exponentiation operator
let numbers = [1, 2, 3, 7, 8];

if (numbers.includes(9)) {
  console.log("Si se encuentra el valor 7");
} else {
  console.log("No se encuentra.");
}

let base = 4;
let exponent = 4;
let result = base ** exponent;

console.log(result);
