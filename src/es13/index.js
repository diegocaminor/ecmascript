/* ECMAScript 13 (Junio, 2022)
 1. Top-level await
 2. at() method for Strings, Arrays, and TypedArrays
*/

// 1. Top-level await
// Before ES2022

await Promise.resolve(console.log("Inkoop"));
// SyntaxError: await is only valid in async function
const print = async () => {
  await Promise.resolve(console.log("Inkoop"));
};
print(); // Output: Inkoop
// After ES2022
await Promise.resolve(console.log("Inkoop")); // Inkoop

// 2. at() method for Strings, Arrays, and TypedArrays
const array = ["firstElement", "two", "lastElement"];
// Using the length property
const lastItem = array[array.length - 1];
console.log(lastItem); // Output: lastElement
// Using the new at method
const lastElement = array.at(-1);
console.log(lastElement); // Output: lastElement
console.log(array.at(-2)); // Output: two
console.log(array.at(0)); // Output: firstElement
