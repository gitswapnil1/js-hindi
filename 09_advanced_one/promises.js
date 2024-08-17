const promiseOne = new Promise(function (resolve, reject) {
    // Do an Async task
    // Db calls, Cryptography, network calls

    setTimeout(function () {
        console.log("Async task is completed");
        resolve()
    }, 100)
})

promiseOne.then(function () {
    console.log("Promise resolved");
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async 2 completed');
        resolve();
    }, 100)
}).then(function () {
    console.log('Async 2 resolved');
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ userName: "Chai", email: "chai@example.com" })
    }, 100)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ userName: "swapnil", password: '123' })
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 100)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.userName;
    })
    .then((userName) => {
        console.log(userName);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected")
    )


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ userName: "JS", password: '123' })
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 100)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function getAllUsers() {
//     try {
//         const res = await fetch('https://api.github.com/users/gitswapnil1');
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error)
//     }
// }

// getAllUsers();

fetch('https://api.github.com/users/gitswapnil1')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error)
    )
// .finally()