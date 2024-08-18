let myName = "swapnil    ";
let myChannel = "chai     ";

// console.log(myName.trim().length);


let heros = ['thor', 'spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.swapnil = function () {
    console.log(`swapnil is present in all objects`);
}

Array.prototype.heySwapnil = function () {
    console.log(`swapnil says hello`);
}

// heroPower.swapnil()
// heros.swapnil()
// heros.heySwapnil()
// heroPower.heySwapnil()

const User = {
    user: "chai",
    email: 'chai@yahoo.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true
}


// Old syntax od writing proto
Teacher.__proto__ = User


// Modern syntax od writing proto
Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUserName = "chaiAurJavascript     ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUserName.trueLength();

"Swapnil".trueLength();
"ColdCoffee".trueLength();