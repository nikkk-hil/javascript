// FOROF LOOPS

const numArr = [1,2,3,4,5,6,9];
const str = 'Kylie Jenner';

for(const num of numArr){
    console.log(num);
}

for(const c of str){
    console.log(c);
}

const map = new Map()
map.set(1, "India");
map.set(2, "USA");
map.set(3, "California");

for(const [key, val] of map){
    console.log(`${val} is number ${key}`);
}



const obj = {
    game1: 'God Of War',
    game2: 'Ghost of Tshushima',
    game3: 'FarCry 6'
}

// OBJECT IS NOT ITERABLE AS THIS TYPE OF LOOP

// for(const [key, value] of obj){
//     console.log(`${value} is my ${key}`);
// }





//FORIN LOOPS

for (const key in obj) {
    console.log(`${obj[key]} is my ${key}`)
}

for (const key in numArr) {
    console.log(key);
}
//NOT GONNA GIVE ANYTHING

// for (const key in map) {
//     console.log(key);
// }





//FOREACH LOOPS

const coding = ['js', 'py', 'rb', 'cpp', 'java'];

// coding.forEach(function (lang) {
//     console.log(lang);
// })

// coding.forEach( (lang) => {
//     console.log(lang);
// })

// function print(items){
//     console.log(items);
// }

// coding.forEach(print);

coding.forEach( (lang, index, arr) => {
    console.log(lang, index, arr);
})

const vals = coding.forEach( (lang, index, arr) => {
    return lang;
});

// FOREACH LOOP DOESN'T RETURN ANYTHING