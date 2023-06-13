/* ECMAScript 10(2019)
 1. Array.flat()
 2. Array.flat() devuelve una nueva matriz con cualquier sub-matriz (s) aplanada. Una llamada a Array.flat() sin ningún argumento solo aplanará un nivel de profundidad. Se puede proporcionar un argumento de profundidad opcional o simplemente se puede llamar de forma consecutiva.
 3. Array.flatMap() El método flatMap() es idéntico al método de mapa ES6, pero también aplana el arreglo al mismo tiempo. El método flatMap() primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz. flatMap() es a menudo bastante útil, ya que fusionar ambos en un solo método es un poco más eficiente.
 4. String.trimStart() & String.trimEnd() String.trimStart() se puede usar para recortar el espacio en blanco desde el inicio de una cadena.
 5. Error opcional en catch permite a los desarrolladores usar try / catch sin el parámetro de error dentro del bloque catch.
 6. Object.fromEntries() Crea un objeto o transforma pares clave-valor en un objeto. Solo acepta iterables, por ejemplo: Object.fromEntries(algunIterable).
 7. Symbol.description La propiedad de descripción de solo lectura es una cadena que devuelve la descripción opcional de los objetos de Símbolo.
*/

let arr = [1, 2, 3, 4, 5];

arr.map((x) => [x, x * 2]);
// [Array(2), Array(2), Array(2)]
// 0: (2)[1, 2]
// 1: (2)[2, 4]
// 2: (2)[3, 6]

arr.flatMap((v) => [v, v * 2]);
// [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log("flat");
console.log(array.flat(2));

let array2 = [1, 2, 3, 4, 5];

console.log("flatMap");
console.log(array2.flatMap((value) => [value, value * 2]));

let hello = "        hello world";
console.log(hello);
console.log(hello.trimStart());

let hello2 = "hello World       ";
console.log(hello2);
console.log(hello2.trimEnd());

try {
} catch {
  error;
}

let entries = [
  ["name", "oscar"],
  ["age", 32],
];
console.log(Object.fromEntries(entries));

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);
