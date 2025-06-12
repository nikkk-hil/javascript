/* 2) object singleton */

// const tinderUser = new Object();  // SingleTon Object
const tinderUser1 = {                   // Non SingleTon Object
    name: "Kylie",
    age : 21,
    isLoggedIn: false,
    Rating: 4
};         

const tinderUser2 = {
    namee: "Kendal",
    agee: 23,
    isLoggedInn: false,
    Ratingg: 4.5
}

/* Nesting of Loops can be done at any level */

// const combinedUser = Object.assign(tinderUser1, tinderUser2);
const combinedUser = {...tinderUser1, ...tinderUser2};               //use of spreader to combine two objects
console.log(combinedUser);


const tinderUser = [
    {
        name: "Kylie",
        age : 21,
        isLoggedIn: false,
        Rating: 4
    },

    {
        name: "Kendal",
        age: 23,
        isLoggedIn: false,
        Rating: 4.5
    }
];

console.log(tinderUser[0]);                     //array of objects with same properties

console.log(Object.keys(tinderUser1))           //array of all keys in the object
console.log(Object.values(tinderUser1))         //array of values
console.log(Object.entries(tinderUser1))        //2d array of key and values

console.log(Object.hasOwn(tinderUser2, "isLoggedInn"))   //checking whether key is present or not in the object