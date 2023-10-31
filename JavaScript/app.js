// alert("Hello Fastians");
// var username; // declaration
// // username = "usama"

// var username = Number(prompt("Whats Your Name"))
// var username = parseInt(prompt("Whats Your Name"))
// var username = parseFloat(prompt("Whats Your Name"))
// var username = +prompt("Whats Your Name")
// username = prompt("Whats Your Name", "Usama") //assignment
// console.log(typeof (username), username)

// NaN , undefined , false , 0 , null , ""
// var firstnum = +prompt("Enter First Num");
// var secondNum = +prompt("Enter Second Num");
// console.log(firstnum + secondNum)
// Usama Usman ==> usamaUsman , UsamaUsman Usama_Usman
// 1UsamaUsman

// var numb = 9;

// console.log(numb == 9)

// if (numb>=10) {
//     console.log("Yes")
// }
// else {
//     console.log("No")
// }

// var marks = +prompt("Enter Your Obtained Marks");
// var total = 500;
// var percentage = (marks / total) * 100;

// if (percentage >= 90) {
//     console.log("Congo, A+", percentage)

// }
// else if (percentage >= 80) {
//     console.log("Congo, A", percentage)

// }
// else if (percentage >= 70) {
//     console.log("Congo, B", percentage)

// }
// else {
//     console.log("Better Luck Next Time", percentage)

// }

// var num = 90
// var uname = "hello"
// var output = num * uname;

// console.log(typeof (output) , output)

// var num1 = 5
// var num2 = 2

// num1 = num1 / 3;
// num1 = num1 + 3
// num1 += 3


// var exp = 10 + ((20 - 30) / 40)
// console.log(exp)

// console.log(num1);
// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)
// console.log(num1/num2)
// console.log(num1**num2)
// console.log(num1%num2)

var age = +prompt("What's Your Age");
var nationality = prompt("What's About nationality");
var gender = prompt("What's Your gender");
var maritalStatus = prompt("Are You Married , Y/N");

// console.log(age, nationality,gender, maritalStatus)

// if (age > 18) {
//     if (nationality == "Pakistani") {
//         if (gender == "Male") {
//             if (maritalStatus == "N") {
//                 console.log("Aja Bhai tu he Mulk ka Future Sudharega")

//             } else {
//                 console.log("Ja k ghar smbhal apna aya bara Mulk Bachany")
//             }

//         } else {
//             console.log("Baji Ghar pe Roti bnayein")
//         }

//     }

//     else {
//         console.log("Sorry You can't vote, please Contact NADRA")
//     }

// }

// else {
//     console.log("Sorry , you are under age")
// }

// if ((age >= 18) && (nationality == "Pakistani" || nationality == 'pakistani') && (gender == "Male") && (maritalStatus == "N")) {
//     console.log("yes")
// } else {
//     console.log("No")
// }

// var username = "usAma"
// console.log(username.toLowerCase())
// console.log(username.toUpperCase())


if ((age >= 18) && (nationality.toLowerCase() == 'pakistani') && (gender == "Male") && (maritalStatus == "N")) {
    console.log("yes")
} else {
    console.log("No")
}