let name = "Ariana-Grande"
let love = "Kendrick Lamar"
let loveeeee = "        Kendrick Lamar         "

console.log(`Hello Everyone! This is ${name} and my love is ${love}`);

const url = "www.kdrick/ariana%20grande"

console.log(url.replace('%20', '-'));
console.log(loveeeee.trim());
console.log(name.substr(0,6));
console.log(love.slice(-18, 8));
console.log(name.charAt(6));
console.log(love.indexOf('L'));

console.log(url.includes("a%20grande"));
console.log(url.search('%'));