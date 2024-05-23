// Primitive Datatype
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const isLoggedIn = false
const scoreValue = 100.23

const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

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
