class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is: ${this.username}`);
    }

    static createID() {
        return `123`;
    }
}

const swapnil = new User("swapnil");
// console.log(swapnil.createID());
swapnil.logMe()

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const iPhone = new Teacher('iPhone', 'i@phone.com')
console.log(iPhone.createID());
iPhone.logMe();