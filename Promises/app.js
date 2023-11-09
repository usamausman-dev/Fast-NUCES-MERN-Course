// const myPromise = new Promise((resolve, reject) => {
//     const randomNum = Math.round(Math.random() * 1000);
//     randomNum > 500 ? setTimeout(() => {
//         resolve(randomNum)
//     }, 3000) : reject(randomNum)
// })


// myPromise
//     .then((data) => console.log("Bari Value", data))
//     .catch((err) => console.log("Choti Value", err))

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }


const anyFun = () => {
    const randomNum = Math.round(Math.random() * 1000);
    return new Promise((resolve, reject) => {
        randomNum > 500 ? setTimeout(() => {
            resolve("Max", randomNum)
        }, 3000) : reject("Min", randomNum)


    })
}


// anyFun().then((data) => console.log(data)).catch((err) => console.log(err))

// const display = () => {
//     // try {
//     //     const output = await anyFun();
//     //     console.log(output)
//     //     console.log("After")
//     // }
//     // catch (error) {
//     //     console.log(error)
//     // }

//     anyFun().then((data) => console.log(data)).catch((err) => console.log(err))
// }

// display();


// (async () => {
//     // console.log("hello")

//     // const myapidata = await anyFun();
//     // console.log(myapidata)

//     const apidata = await fetch('https://dummyjson.com/carts');
//     const data = await apidata.json()
//     console.log(data)
// })();

const std = {
    name: 'irshad',
    course: 'MERN Stack',
    age : 23
};
// console.log(
//     Object.entries(std))

const data = ['hello', 'hi']

console.log(data.length)
// console.log(std.length)
console.log(Object.keys(std).length)



// console.log("Using FOR-IN LOOP")

// for (const i in data) {
//     console.log(i)

// }

// console.log("Using FOR-OF LOOP")

// for (const i of data) {
//     console.log(i)

// }