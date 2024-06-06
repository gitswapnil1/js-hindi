// Arrays in Javascript
// () -> parenthesis, {}-> braces, []-> brackets

const myArr = [0, 1, 2, 3, 4, 5, true, "ssd"]
const myHeros = ["shaktiman", "nagraj"]
const myArr2 = new Array(0,1,2,3,4,5)

// console.log(myArr[1]);

// Array methods

// myArr2.push(6)
// myArr2.push(7)
// myArr2.pop()
// myArr2.unshift(9)
// myArr2.shift()
// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(9));
// console.log(myArr2.indexOf(3));
// console.log(myArr2.includes(3));

// const newArr = myArr2.join()

// console.log(typeof newArr)

// console.log(myArr2);


// slice & splice methods of an Array

console.log("A", myArr2);

const myn1 = myArr2.slice(1,3);
console.log(myn1);

console.log("B", myArr2);

const myn2 = myArr2.splice(1,3);
console.log("C", myArr2);
console.log(myn2);

