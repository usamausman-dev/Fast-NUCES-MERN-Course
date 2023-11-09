// var StdName = 'Usama';
// console.log(StdName)
// var StdName = 'Usama'

// let const 
// console.log(StdName)
// let StdName = "Usama"
// StdName = 'Usman'


// const StdName = "Usama"
// StdName = 'Usman'
// console.log(StdName)


// let hello = "Usama"

// hoisting
// demo()

// function demo() {
//     console.log("hello")
// }

// console.log(hello)
// demo();

// const demo = name => console.log("hello" + name)
// const demo = (name, age) => console.log("hello, my name is" + name + " and My age is " + age)

// const demo = (name, age) => console.log(`Hello 



// // My Name is ${name} and my age is ${age}`)

// demo('Usama', 24)
// demo('Usama');


// (() => {
//     console.log("hello")
// })();


// console.log(demo())

// setTimeout(demo, 3000)
// setTimeout(() => {
//     console.log("hello")
// }, 3000)




// const anyFunc = () => {

//     let a = 10; //lexical scope

//     //closure
//     const newFunc = () => {
//         console.log("hello",a);
//     }
//     newFunc();
// }


// anyFunc();


// let user = 'Usama';
// let fname = 'usman'
// user == 'usama' ?
//     (console.log("yes"))
//     :
//     ((fname == 'usman') ? console.log("Sahi") : console.log("Allowed"))
// console.log()

// const obj1 = {
//     name: 'Usama',
//     fname: 'Usman'
// }

// const {name, fname} = obj1 //destructuring

// console.log(name)

const hello = (a, b, ...restOp) => {
    // console.log(a, b)
    console.log(restOp)
    return a + b
}

const sum = hello(1, 2, 3, 4, 5, 5);
console.log(sum)
// const arr = [1, 2, 3, 4]

// const arr1 = [1, 2, 3, 4, ...arr, 8, 9, 9, 0] // spread op

// console.log(arr1)