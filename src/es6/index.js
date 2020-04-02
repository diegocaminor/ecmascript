////////////////
////////////////
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

////////////////
////////////////
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//es6
let epicPhrase2 = `${hello} ${world}` 
console.log(epicPhrase2);