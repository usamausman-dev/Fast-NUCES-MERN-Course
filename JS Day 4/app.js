// console.log(document.childNodes[1].childNodes[0].firstChild.nextSibling.nextSibling.nextSibling.parentNode)

// var target = document.getElementById('target')
// var ids = target.getAttribute('id')
// ids = "anything"
// target.getAttribute('id') = "anything"
// console.log(ids)
// target.setAttribute('class', 'hello')
// console.log(target.getAttribute('class'))

// console.log(target.attributes)

// console.log(target.parentNode.parentNode.parentNode)
// var str = "Usama"
// console.log(str.charAt(0))
// var ascii = str.charCodeAt(0)
// console.log(String.fromCharCode(ascii + 32))

// function lowerCase(str){
//     var ascii_letter = str.charCodeAt(0)
//     var firstLetter = String.fromCharCode(ascii_letter + 32)
//     console.log()
// }

// lowerCase("UsAma")

var target = document.getElementById('target')
var para = document.createElement('p')
var para_text = document.createTextNode("Hello") 
para.appendChild(para_text)
target.appendChild(para)


