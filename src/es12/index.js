/* ECMAScript 12 (Junio, 2021)
 1. Numeric separators
 2. String replaceAll()
 3. Logical assignment operator
 4. Promise.any
 5. Private class Variables
 6. Private getters and setters
 7. WeakRef
*/

// 1. Numeric separators -> solo ayuda visualmente cuando se trabaja con números muy grandes
1_000_000_000; // Ah, so a billion
101_475_938.38; // And this is hundreds of millions
let fee = 123_00; // $123 (12300 cents, apparently)
let fee2 = 12_300; // $12,300 (woah, that fee!)
let amount = 12345_00; // 12,345 (1234500 cents, apparently)
let amount2 = 123_4500; // 123.45 (4-fixed financial)
let amount3 = 1_234_500; // 1,234,500

// 2. String replaceAll()
const inputText = "If you're :) and you know it :clap your hands :clap :clap";
const emojiReplace = (text) => {
  let emojized = "";
  emojized = text.replaceAll(":)", "😀");
  emojized = emojized.replaceAll(":clap", "👏🏻");
  return emojized;
};
console.log(emojiReplace(inputText));

// 3. Logical assignment operator
//"Or Or Equals"
x ||= y;
x || (x = y);

// "And And Equals"
x &&= y;
x && (x = y);

// "QQ Equals"
x ??= y;
x ?? (x = y);
const updateID = (user) => {
  // We can do this
  if (!user.id) user.id = 1;

  // Or this
  user.id = user.id || 1;

  // Or use logical assignment operator.
  user.id ||= 1;
};

// 4. Promise.any
const promiseOne = new Promise((resolve, reject) => resolve("resolve 1!"));
const promiseTwo = new Promise((resolve, reject) => resolve("resolve 2!"));
const promiseThree = new Promise((resolve, reject) => resolve("resolve 3!"));
Promise.any([promiseOne, promiseTwo, promiseThree]).then((data) =>
  console.log(data)
);

//  5. Private Class Variables
class Person {
  #born = 1980;
  age() {
    console.log(2020 - this.#born);
  }
}
const person1 = new Person();
person1.age(); // 40
console.log(person1.#born); //Uncaught SyntaxError: Private field '#born' must be declared in an enclosing class

// 7. WeakRef
// En este ejemplo, creamos una referencia débil a un objeto utilizando WeakRef. Luego, eliminamos la referencia original al objeto estableciendo obj en null. Después,
// utilizamos deref() para obtener el objeto referenciado a través de la referencia débil. Si el objeto aún no ha sido eliminado, podemos acceder a sus propiedades.
// Si el objeto ya ha sido eliminado, obtendremos undefined.

// Las WeakRefs son útiles en escenarios donde se necesita mantener una referencia a un objeto sin impedir su eliminación por el recolector de basura,
// como en el caso de la gestión de cachés, observadores de eventos, monitoreo de recursos, y más. Sin embargo, es importante tener en cuenta que las WeakRefs
// tienen limitaciones y es posible que no estén disponibles en todos los entornos de ejecución de JavaScript.
let obj = { data: "Some data" };
const weakRef = new WeakRef(obj);

obj = null; // Se elimina la referencia original al objeto

// Intentar obtener el objeto a través de la referencia débil
const dereferencedObj = weakRef.deref();

if (dereferencedObj) {
  console.log(dereferencedObj.data); // Output: "Some data"
} else {
  console.log("El objeto ya ha sido eliminado");
}
