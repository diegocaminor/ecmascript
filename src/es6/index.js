// ecmascript6 nace en 2015
// ES6 includes the following new features:
// arrows
// classes
// enhanced object literals
// template strings
// destructuring
// default + rest + spread
// let + const
// iterators + for..of
// generators
// unicode
// modules
// module loaders
// map + set + weakmap + weakset
// proxies
// symbols
// subclassable built-ins
// promises
// math + number + string + array + object APIs
// binary and octal literals
// reflect api
// tail calls

// antes es6
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'PE';
    console.log(name, age, country);
}

// es6
function newFunction2(name='oscar', age=32, country='PE') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Diego', 26, 'AQP');

// antes es6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// es6
let epicPhrase2 = `${hello} ${world}` 
console.log(epicPhrase2);

// antes es6
let lorem = "Frase épica de prueba \n"
            + "otra frase épica de prueba";
// es6
let lorem2 = `Frase épica de prueba 
otra frase épica de prueba`;
console.log(lorem);
console.log(lorem2);

// antes es6
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age, person.country);
// es6
let { name, age, country } = person;
console.log(name, age, country);

let team1 = ['Diego', 'Camila', 'Mack', 'Patrick']
let team2 = ['Chacha', 'Jose', 'Tesla', 'Agni']
let fullTeam = ['Veronica', 'Razcall', ...team1, ...team2]
console.log(fullTeam);

{
    var globalVar = 'Gloabal var'; // var es una variable global
}

{
    let globalLet = 'Gloabal let'; // let existe dentro de su scope
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b'; // no puede cambiar el valor más adelante debido a que es una constante
console.log(a);

let firstName = 'Diego'
let myAge = 26

// es5
obj = { firstName: firstName, myAge: myAge }
// es6
obj2 = { firstName, myAge }
console.log(obj2);

const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Yesica', age: 27 }
]

// antes de es6
let listOfNames = names.map(function (item) {
console.log(item.name);
})
// es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
// ...
}

const listOfNames4 = name => {
// ...
}

const square = num => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

const helloFunc = require('./module');
console.log(helloFunc());

// generators
function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};
const generatorHello = helloWorld();
console.log(generatorHello.next().value); // Hello,
console.log(generatorHello.next().value); // World
console.log(generatorHello.next().value); // undefined