/* ECMAScript 9(2018)
 - Major new features:
 1. Asynchronous Iteration (Domenic Denicola, Kevin Smith)
 2. Rest/Spread Properties (Sebastian Markbåge)
 3. New regular expression features:
 4. RegExp named capture groups (Gorkem Yakin, Daniel Ehrenberg)
 5. RegExp Unicode Property Escapes (Mathias Bynens)
 6. RegExp Lookbehind Assertions (Gorkem Yakin, Nozomu Katō, Daniel Ehrenberg)
 7. (dotAll) flag for regular expressions (Mathias Bynens)
 8. Other new features:
 9. Promise.prototype.finally() (Jordan Harband)
 10. Template Literal Revision (Tim Disney)
*/

const obj = {
  name: "oscar",
  age: 32,
  country: "MX",
};

let { country, ...all } = obj; // operador de reposo
console.log(all);

const obj = {
  name: "Oscar",
  age: 32,
};

const obj1 = {
  ...obj,
  country: "MX",
};

console.log(obj1);

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo"));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
