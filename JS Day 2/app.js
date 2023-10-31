// var std1 = "Ammad"
// var std2 = "Haseeb"
// var std3 = "Anas"

// var students = ['Ammad', 'Haseeb', "Anas"]
// students[2] = "Malaika"
// students[3] = "Aisha"


// console.log(students)

// students.pop()
// console.log(students)

// students.push("Ali")
// console.log(students)

// students.unshift("Usama")
// console.log(students)

// students.shift()
// console.log(students)

// var stdcpy = students.slice(1, 2)
// console.log("Copy==>", stdcpy)

// students.splice(1, 0, "Usama", "Usman")
// console.log(students)

// console.log("Name==>", students[0])
// console.log("Name==>", students[1])
// console.log("Name==>", students[2])
// console.log("Name==>", students[3])
// console.log("Name==>", students[4])

// for (var i = 0; i < students.length; i++) {
//     console.log("Name==>", students[i].toUpperCase())
// }

// console.log(students.length)


// var txt = "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter."
// var txt2rep = "some characteristics"

// for (var index = 0; index < txt.length; index++) {
//     if (txt.slice(index, index + txt2rep.length) == txt2rep) {
//         txt = txt.slice(0, index) + "HELLO WORLD" + txt.slice(index + txt2rep.length)
//     }
// }

// var hello = txt.replace(/is/g, "KI HAAL EY")
// console.log(txt)
// console.log(hello)


// var mynum = Math.random() * 100;
// console.log(Math.round(mynum))

// var otp = Math.round(Math.floor((Math.random() * 1000)) + Math.ceil((Math.random() * 8000)))
// console.log(otp)


var DOB = new Date("July 19 , 1999");
var current = new Date();

console.log(DOB)

// current.setDate(19)
// current.setMonth(3)

console.log(current)

var diff = (current - DOB) / (1000 * 60 * 60 * 24 * 365)
console.log(diff)

// console.log(current.getDate())
// console.log(current.getDay())
// console.log(current.getFullYear())
// console.log(current.getHours())
// console.log(current.getMinutes())
// console.log(current.getMilliseconds())
// console.log(current.getMonth())
// console.log(current.getTime())



