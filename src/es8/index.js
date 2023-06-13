// ECMAScript 8(2017)
// At the TC39 meeting in January 2017, the last feature of ECMAScript 2017, “Shared memory and atomics” .
// Major new features:
// Async Functions (Brian Terlson)
// Shared memory and atomics (Lars T. Hansen)
// Minor new features:
// Object.values/Object.entries/Object.keys (Jordan Harband)
// String padding (Jordan Harband, Rick Waldron)
// Object.getOwnPropertyDescriptors() (Jordan Harband, Andrea Giammarchi)
// Trailing commas in function parameter lists and calls (Jeff Morrison)
const data = {
  frontend: "Oscar",
  backend: "ISabel",
  design: "Ana",
};

// Object.entries transforma un objeto a una matriz
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length); // muy útil para saber cuantos elements tiene nuestro objeto

// Object.values devuelve los valores de un objeto a un arreglo
const data = {
  frontend: "Oscar",
  backend: "ISabel",
  design: "Ana",
};

const values = Object.values(data);
console.log(values); // ['Oscar', 'Isabel', 'Ana']
console.log(values.length); // 3

const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, " -----"));
console.log("food".padEnd(12, "  -----"));

const obj = {
  name: "oscar", // Trailing commas
};

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
