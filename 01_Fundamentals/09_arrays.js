let arr = [0, 1, 2, 3, 4];

console.log(arr.slice(1,3));
console.log(arr);


console.log(arr.splice(1,3));
console.log(arr);


let arr_num1 = [0, 1, 2, 3, 4, 5]
let arr_num2 = [9, 8, 7, 6, 5, 4]

console.log(arr_num1.concat(arr_num2));

let combinedArr = [...arr_num1, ...arr_num2];
console.log(combinedArr);

const tempArr = [0, 1, [2,3,4,5, [6,7,8,9,10], 11],12,13,14,[15,16,[17,18],19],20,21];
console.log(tempArr.flat(2));

console.log(Array.from({name : "Nikhil"}));  //intersting
console.log(Array.from("Nikhil"));
console.log(Array.of(arr_num1, arr_num2, combinedArr));
console.log(Array.isArray("Nikk"));