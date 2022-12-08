//Exercises :Level 1 

// const age = prompt("Enter Your Age :")
// if (age > 18) {
//     console.log("You are old enough to drive.")
// } else {
//     console.log (`You are left with ${18- age} years to drive.`)
// }


// let myAge = prompt("Enter My Age:")
// const yourAge = prompt("Enter Your age:")
// if (yourAge > myAge) {
//     console.log(`You are ${yourAge-myAge} years older than me.`)
// }else {
//     console.log(`You are ${yourAge-myAge} years elder than me.`)
// }

// 3.1 let a = 4
// let b = 3
// if (a > b){
//     console.log("a is greater than b")
// }else {
//     console.log("a is less than b")
// }

//3.2 let a = 4
// let b = 3
// a > b ? console.log("a is greater than b") : console.log("a is less than b")


const number = prompt("Enter a Number:")
if (number % 2 === 0){
    console.log(`${number} is a even number.`)
}else{
    console.log(`${number} is an odd number.`)
}

//Exercises :Level 2 

const marks = prompt("Enter the student marks:")
if (marks <= 100 && marks >= 80){
    console.log("Grade : A")
}else if (marks <= 89 && marks >= 70) {
    console.log("Grade : B")
}else if (marks <= 69 && marks >= 60) {
    console.log("Grade : C")   
}else if (marks <= 59 && marks >= 50) {
    console.log("Grade : D")   
}else{
    console.log("Grade : F")
}


// const month = prompt("Enter the month:")
// if(month==="September" || month==="Octomber" || month==="November"){
//     console.log("This season is Autumn")
// }else if(month==="December"|| month==="January" || month==="february"){
//     console.log("Winter")
// }else if(month==="March" || month==="April" || month==="May"){
//     console.log("Spring")
// }else{
//     console.log("Summer")
// }


// let dayUserInput = prompt('What day is today ?')
// let day = dayUserInput.toLowerCase()
// switch (day) {
//     case 'monday':
//       console.log('Monday is a working day.')
//       break
//     case 'tuesday':
//       console.log('Tuesday is a working day.')
//       break
//     case 'wednesday':
//       console.log('Wednesday is a working day.')
//       break
//     case 'thursday':
//       console.log('Thursday is a working day.')
//       break
//     case 'friday':
//       console.log('Friday is a working day.')
//       break
//     case 'saturday':
//       console.log('Saturday is a Weekend')
//       break
//     case 'sunday':
//       console.log('Today is Sunday')
//       break
// }

//Exercises :Level 3

// let monthinput = prompt("Enter a Month: ")
// let month = monthinput.toLowerCase()
// if (month =="january" ||month =="march" ||month =="may" ||month =="july" ||month =="auguest" ||month =="octomber" ||month =="december" ){
//     console.log(`${month} has 31 days.`)
// }else if (month =="april" ||month =="june "||month =="september" ||month =="november"){
//     console.log(`${month} has 30 days.`)
// }else if(month =="february" ) {
//     console.log(`${month} has 28 days.`)
// }else{
//     console.log("Invalid Month.")
// }