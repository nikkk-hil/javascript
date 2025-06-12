/* --------STACK MEMORY => PRIMITIVE DT--------*/

let emailOne = "user@google.com"
let emailTwo = emailOne

emailTwo = "niktemporary@gmail.com"

console.log(emailOne);
console.log(emailTwo);

/* ---------HEAP => NON PRIMITIVE------- */

let arr = [2, 5, 9, 20]
let arr2 = arr

arr2 = [1, 1, 1, 1]

let user1 = {
    email : "user@google.com",
    id : 127,
}

let user2 = user1     //refernce not copy

user2.email = "niktemporary@gmail.com"

console.log(arr);
console.log(arr2);

console.log(user1.email);
console.log(user2.email);





