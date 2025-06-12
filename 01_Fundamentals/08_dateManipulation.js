const date = new Date();
// console.log(date);

const currDate = new Date('05-30-2025');
// console.log(Date.now());
// console.log(currDate.getTime());    

// console.log(Math.floor(date.getTime()/3153600000));

// console.log(Math.floor((Date.now() - currDate.getTime())/3600000));

// console.log(date.getFullYear());

console.log(date.toLocaleString('default', {
    weekday : "long",
    hour : "2-digit",
}));

// console.log(date.toLocaleString());