/* WE CAN CREATE OBJECTS IN 2 WAYS */

// 1) OBJECT LITERALS
const id = Symbol("0124")

const employee = {
    name: "Rohan",
    age: 21,
    email: "www.rohan777@gmail.com",
    [id]: "0124",                         //NEW
    salary: 25000
}

console.log(employee);
console.log(employee[id]);
console.log(employee["salary"]);

employee.salary = 26000;
// Object.freeze(employee);
employee.salary = 27000;

console.log(employee.salary);

employee.greeting = function() {
    console.log(`Greeting to the ${this.name}, work well`)
}

console.log(employee.greeting());

console.log(employee);