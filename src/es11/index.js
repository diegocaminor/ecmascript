/* ECMAScript 11 (Junio, 2020)
 1. Private Class Variables
 2. Promise.allSettled
 3. String.prototype.matchAll
 4. Optional Chaining Operator
 5. Dynamic Import
 6. BigInt
 7. Nullish cocoalescing
 8. globalThis
*/

//  1. Private Class Variables
class Person {
    #born = 1980
    age() { console.log(2020 - this.#born) }
}
const person1 = new Person()
person1.age() // 40
console.log(person1.#born) //Uncaught SyntaxError: Private field '#born' must be declared in an enclosing class


// 2. Promise.allSettled
// La diferencia clave es que Promise.allSettled devuelve un array con los resultados de todas las promesas,
// independientemente de si se resolvieron o se rechazaron, mientras que Promise.all se rechaza inmediatamente
// si alguna de las promesas se rechaza y solo se resuelve cuando todas las promesas se resuelven correctamente.
const promiseOne = new Promise((resolve, reject) =>  
                       setTimeout(resolve, 3000));
const promiseTwo = new Promise((resolve, reject) => 
                       setTimeout(reject, 3000));
Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data));
// Promise {<pending>}
// (2) [{…}, {…}]
// 0: {status: "fulfilled", value: undefined}
//1: {status: "rejected", reason: undefined}
//length: 2


// 3. String.prototype.matchAll
const regexp = /g(ro)(up(\d?))/g;
const groups = 'group1group2group3';
console.table(groups.match(regexp));
//(3) ["group1", "group2", "group3"]
//0: "group1"
//1: "group2"
//2: "group3"
const someString = 'group1group2group3';
const array = [...someString.matchAll(regexp)];
console.table(array)
//(3) [Array(4), Array(4), Array(4)]
//0: (4) ["group1", "ro", "up1", "1", index: 0, input: //"group1group2group3", groups: undefined]
//1: (4) ["group2", "ro", "up2", "2", index: 6, input: //"group1group2group3", groups: undefined]
//2: (4) ["group3", "ro", "up3", "3", index: 12, input: //"group1group2group3", groups: undefined]
//length: 3


// 4. Optional Chaining Operator
const users = {
  gndx: {
    country: "MX",
  },
  ana: {
    country: "CO",
  },
};
// console.log(users.bebeloper.country); //! TypeError: Cannot read property 'country' of undefined
console.log(users.bebeloper?country);


// 5. Dynamic Import
import * as greet from './ greetings.module.js';
greet.hello();
//Hello World!

if( 1 === 1){
import('./greetingsModule.js').then( (greet) => {
             greet.hello();
            // Hello World!
         });
}

// 6. BigInt
console.log(Number.MAX_SAFE_INTEGER);
//9007199254740991
const max = Number.MAX_SAFE_INTEGER;
console.log(max +1);
//9007199254740992  -> Correct value!
console.log(max +10n);
//9007199254741000  -> Incorrect value! (1001)
const myBigNumber = 9007199254740991n;
console.log(myBigNumber +1n);
//9007199254740992n  -> Correct value!
console.log(myBigNumber +10n);
//9007199254741001n  -> Correct value!
//Note:
console.log(myBigNumber +10);
//Error: you cannot mix BigInt and other types, use explicit //conversions.
//Correct way: You have to add the letter 'n' on the end of the //number


// 7. Nullish cocoalescing
const number = 1;
const validate = number ?? 5;
console.log(validate); //! 1
const nullExample = null;
const validateNull = nullExample ?? 5;
console.log(validateNull); //! 5


// 8. globalThis
console.log(window); // navegador
console.log(global);  // node
console.log(self);// webworker
console.log(globalThis);  // Acceso al objeto global sin importar el entorno como node o browser
globalThis.setTimeout(() => {
  console.log('Ejecutando el temporizador...');
}, 1000);