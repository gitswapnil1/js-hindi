// singleton
// Object.create

// object Literals
const mySym = Symbol("key1");

const jsUser = {
    name: "swapnil",
    "full name": "swapnil Dapkosh",
    [mySym]:"mynewKey1",
    age:20,
    email:"swapnil@google.com",
    location:"nagpur",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Tuesday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// how to declare symbol in objet's key---> refer the syntax on line no.11
// console.log(jsUser[mySym]); //like this we can print create the symbol in object's key & print it in console.

// How to override the values of object

jsUser.email = "swapnil@yahoo.com";
// console.log(jsUser);

// How to freeze the object so that it's content will not change 
// Object.freeze(jsUser);
jsUser.email = "swapnil@init.com";
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`); //String Interpolation
    console.log(`Hello js user, ${this["full name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




