// Primitive Datatype
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const isLoggedIn = false
const scoreValue = 100.23

const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)

const bigNumber = 3456463433232432n

// Reference Type
// Array, Object, Functions

const myHero = ["Shaktimaan", "Bheem", "Raju"]
let myObj = {
    Name: "Swapnil",
    Age: 25
}

let myFunction = function(){
    console.log("Hello World!!");
}

// -------------------------------------------------------------------------------------------
// Two types of memory: Stack(Primitive) & Heap(Non-primitive)

let myChannelname = "imaginelife"

let mysecondChannel = myChannelname;

mysecondChannel = "thirdChannelName"

// console.log(myChannelname);
// console.log(mysecondChannel);

let userOne = {
    email: "userone@google.com",
    upi: "userone@ybl"
}

let userTwo = userOne;
userTwo.email("usertwo@google.com")

console.log(userOne.email);
console.log(userTwo.email);
