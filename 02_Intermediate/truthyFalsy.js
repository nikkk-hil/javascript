/*

Falsy Values
    false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values
    "0", " ", 'false', [], {}, function(){}

*/

const emptyObj = {};
// TO find an empty obj
if(Object.keys(emptyObj).length === 0)
    console.log("object is empty");

// Nullish Coaleshing Operator

console.log(null ?? 10);
console.log(null ?? null ?? 10);
console.log(20 ?? 10);