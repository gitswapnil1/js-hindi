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
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http:/swapil.com/swapnil%20form"
console.log(url.replace('%20', '-'));

console.log(url.includes('swapnil'));

console.log(gameName.split('-'))
