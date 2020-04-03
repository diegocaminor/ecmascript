// ECMAScript 10(2019)
// 

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log("flat");
console.log(array.flat(2));

let array2 = [1,2,3,4,5];

console.log("flatMap");
console.log(array2.flatMap(value => [value, value * 2]));

let hello = '        hello world';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello World       ';
console.log(hello2);
console.log(hello2.trimEnd());

try {

} catch {
  error
}


let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);