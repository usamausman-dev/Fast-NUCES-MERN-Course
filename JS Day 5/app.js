// var student = {
//     Name: "Usama",
//     FName: "Usman",
//     Age: 24,
//     MaritalStatus: false,
//     hobbies: ['Cricket', 'Music', 'Bike Riding'],
//     Certifications: [
//         {
//             Organization: 'Microsft',
//             CertificationName: 'MS Office'
//         },
//         {
//             Organization: 'Google',
//             CertificationName: 'Firebase'
//         }
//     ],
//     voteEligible: function () {
//         // console.log("hello",this.Age);
//         if (this.Age >= 18) {
//             return true
//         } else {
//             return false
//         }
//     }
// };

// console.log(student.Certifications[0].Organization)
// console.log(student.voteEligible())

// function Student(name, fname, age, id, maritalStatus) {
//     this.name = name;
//     this.fname = fname;
//     this.age = age;
//     this.id = id;
//     this.maritalStatus = maritalStatus;
//     this.checkVote = function () {
//         if (this.age > 18) {
//             return true
//         } else {
//             return false
//         }

//     }                                                                                                                                                                           
// }



class Student {
    constructor(name, fname, age, id, maritalStatus) {
        this.name = name;
        this.fname = fname;
        this.age = age;
        this.id = id;
        this.maritalStatus = maritalStatus;
    }

    checkVote() {
        if (this.age > 18) {
            return true;
        } else {
            return false
        }
    }
}

var std1 = new Student('Usama', 'Usman', 24, '23K-7800', false);
var std2 = new Student('Anas', 'Shoukat', 17, 'SMIU', false);
console.log('name' in std2)
console.log(std1)

// window.open();

// var monkeyWindow = window.open();
// var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown robes with large hoods covering their heads.</p>";
// monkeyWindow.document.write(windowContent);



// var windowSpecs = ;

// window.location.assign('https://dummyjson.com/#google_vignette')
window.open("", "","width=100,height=100,left='100',top='200'");
