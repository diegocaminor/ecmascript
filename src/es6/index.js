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