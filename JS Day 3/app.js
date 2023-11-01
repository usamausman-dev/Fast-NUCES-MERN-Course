// function demo(num) {
//     // alert('Hello , I am demo')
//     console.log(num * num)
//     return num*num
// }

// // demo(5);
// // demo(15);
// // demo(52);
// // demo(35);

// var data = demo(5);
// console.log("Yeh ==>", data)

// function toCapitalCase(str) {
//     var strArr = str.split(' ');
//     var temp = "";
//     for (var i = 0; i < strArr.length; i++) {
//         // console.log(strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase())
//         temp += strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase() + " "
//     }

//     // console.log(temp)
//     // return (temp)
//     // var firstLetter = str[0].toUpperCase();
//     // var remainingLetter = str.slice(1).toLowerCase();
//     // console.log(firstLetter + remainingLetter)
// }

// var sentence = toCapitalCase("heLLo This is Usama, I am fuLL StaCk DeveLopeR")
// console.log(sentence)

// "hello".toUpperCase


// var data = "Usama"

// function demo() {

//     var hi = "greetings"
//     var data = "Usman"
//     console.log(data, hi)
// }



// console.log("Outer ==> ", data)
// demo()

// var data = "Asif John"

// switch (data) {
//     case 'Usama':
//         console.log("Welcome Sir")
//         break;

//     case 'Asif John':
//         console.log("Welcome Sir , We have a class Tody")
//         break;

//     default:
//         console.log("Good Evening STudents")
//         break;
// }

// for (var i = 0; i < 5; i++) {
//     console.log(i)
// }

// var iterator = 0;
// while (iterator < 5) {
//     console.log(iterator)
//     iterator++;
// }

// var i = 0;
// do {
//     i++;
//     console.log(i)

// } while (i > 0 && i < 90);

// var a = 10;
// console.log(a++)
// console.log(a)
// console.log(++a)

// function clickme(){
//     console.log("Running")
// }

// function submitForm(e) {
//     e.preventDefault()
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     console.log(email, password)
// }
function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;

    switch (zipEntered) {
        case "60608":
            cityName = "Chicago";
            break;
        case "68114":
            cityName = "Omaha";
            break;
        case "53212":
            cityName = "Milwaukee";
    }
    document.getElementById("city").value = cityName;
}
function expandLoris() {
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus.They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species - dependent.The hands and feet of slow lorises have several adaptations that give them a pincer - like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;

}
// var paras = document.getElementsByClassName('mypara')
// var paras = document.getElementsByClassName('mypara')


// for (var i = 0; i < paras.length; i++) {
//     console.log(paras[i].innerHTML)
// }

// console.log(document.getElementById('slowLoris').innerText)


// var div = document.getElementById('greetings')
// console.log(div.getElementsByTagName('p'))

