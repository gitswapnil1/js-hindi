const name = "swapnil"
const repoCount = 50

// console.log(name + repoCount + " Value");
// The above method is oldSchool way to write strings

// Below: String interpolation
// console.log(`Hello my name is ${name} & my repo count is ${repoCount}`);

// Another way to declare & define the strings
const gameName = new String("Swapnil-ssc-com")

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 5);
// console.log(newString);

const anotherString = gameName.slice(-10, 5);
// console.log(anotherString);

const newStringOne= "  swapnil   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "http:/Swapil.com/swapnil%20form"
// console.log(url.replace('%20', '-'));
// console.log(url.includes('swapnil'));
// console.log(gameName.split('-'))

// console.log(url.replaceAll('/', '.'));
console.log(url.toLocaleLowerCase());
console.log(url.toLowerCase());
console.log(url.toUpperCase());

const str = 'The quick brown fox jumps over the lazy dog and dog!!';
const words = str.split(" ");
const chars = str.split("");
console.log(chars[4]);

console.log(str.charAt(1));
console.log(str.concat('and cat'));
console.log(str.endsWith('dog.'));
let searchTerm = "dog"
console.log(str.lastIndexOf(searchTerm));

const paragraph = 'The quick A brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);

// console.log(paragraph.repeat(2));

console.log(paragraph.slice(9, 17));

