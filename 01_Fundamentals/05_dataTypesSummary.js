/* ----------- PRIMITIVE -----------*/
/*
7
number, string, null, undefined, symbol, boolean, bigInt


----------- NON-PRIMITIVE (reference) -----------

ARRAY, OBJECTS, FUNCTIONS

*/

const id = Symbol('789')
const anotherId = Symbol('789')

const bigNum = 21456398752014n
console.log(typeof bigNum);

// console.log(id === anotherId);


const heros = ["Hulk", "Thor", "Black Widow"]

const my_obj = {
    name : "Kylie",
    age : 32,
}

const myFunction = function(){
    console.log("Hey Guyzz");
}



console.log(typeof heros);
console.log(typeof my_obj);
console.log(typeof myFunction);
