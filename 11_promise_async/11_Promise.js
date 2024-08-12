
// # Create a promise that resolves with a message after 2 second timeout and log the message to the console.

//let promise1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve("Promise is resolved");
//    }, 2000)
//})

//promise1.then(res => console.log(res));


// # Create a promise that reject with a error message after 2 second timeout and handle the error message using .catch().

//let promise2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        reject("Promise is rejected");
//    }, 2000)
//})

//promise1
//    .then(res => console.log(res))
//    .catch(err => console.log(err))



//# Create a sequence of promise that simulate fetching data from a server.Chain the promises to log messages in a specific order.

//function fetchData(data, delay) {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            console.log(`Fetched : ${data}`);
//            resolve(data);
//        }, delay);
//    })
//}

//fetchData('Data1', 1000)
//    .then(res => {
//        console.log(`Get ${res}`);
//        return fetchData('Data2', 2000);
//    })
//    .then(res => {
//        console.log(`Get ${res}`);
//        return fetchData('Data3', 3000);
//    })
//    .then(res => {
//        console.log(`Get ${res}`);
//        return fetchData('Data4', 4000);
//    })
//    .catch(err => {
//        console.log('Occured an error' + err);
//    })



// # Write an async function that waits for a promise to resolve and then logs the resolved value.

//let promise2 = () => {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            resolve("Promise is resolved");
//        }, 2000)
//    })
//}


//async function fetchData() {
//    let data = await promise2();
//    console.log(data);
//}
//fetchData();


//async function fetchData() {
//    return promise2();
//}
//fetchData()
//    .then(res => console.log(res))
//    .catch(err => console.log(err))


// # Write an async function that handles a rejected promises using try-catch and log the error message.

const resolveAfter2Seconds = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Rejected value after 2 seconds");
        }, 2000);
    });
};

const asyncFunction = async () => {
    try {
        const result = await resolveAfter2Second();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

//asyncFunction();


//# Use the fetch API to get data from a public API and log the response data to the console using promises.

//fetch('https://api.github.com/users/victorShiva')
//    .then(res => res.json())
//    .then(data => console.log(data))
//    .catch(err => console.log(err))



// # Use the fetch API to get data from a public API and log the response data to the console using async/await.

const fetchData = async () => {
    try {
        const response = await fetch('https://api.github.com/users/victorShiva')
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem', error);
    }
}

//fetchData();


// # Use Promise.all to wait for multiple promise to resolve and then log all their values.

//const promise1 = new Promise((resolve) => {
//    setTimeout(() => {
//        resolve("Promise 1 resolved after 1 second");
//    }, 1000);
//});

//const promise2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve("Promise 2 resolved after 2 seconds");
//    }, 2000);
//});

//const promise3 = new Promise((resolve) => {
//    setTimeout(() => {
//        resolve("Promise 3 resolved after 3 seconds");
//    }, 3000);
//});

//Promise.all([promise1, promise2, promise3])
//    .then(value => {
//        console.log(value);
//    })
//    .catch(error => {
//        console.error(error);
//    })





// # Use Promise.race to log the value of the first promise that resolves among multiple promise.

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1 resolved after 1 second");
    }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved after 2 seconds");
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved after 1.5 seconds");
    }, 1500);
});

Promise.race([promise1, promise2, promise3])
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.error(error);
    })