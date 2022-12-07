// const firstName = 'Urvisha'
// const lastName = 'Bambhroliya'
// const country = 'India'
// const city = 'Surat'
// const age = 24
// const isMarried = 'no'
// const year = 2022


//const v1 = parselInt('9.8')
//const v2 = '10'
let var2 = "10"
let var3 =  10
let var4 = parseInt(var2)
// let va5 = Number(var2)
// let va6 = +(var2)
console.log(typeof var4)
console.log(typeof var3)


console.log(4 > 3)   // true
console.log(4 >= 3)   //true
console.log(4 < 3)    //false
console.log(4 <= 3)    //false
console.log(4 == 4)   // true
console.log(4 === 4)  //true
console.log(4 != 4)    //false
console.log(4 !== 4)   // false
console.log(4 != '4')    //false
console.log(4 == '4')    // true
console.log(4 === '4')      // false
console.log('python'.length !== 'jargon'.length )  



console.log(4 > 3 && 10 < 12)   // true & true -> true
console.log(4 > 3 && 10 > 12)    // true & false -> false
console.log(4 > 3 || 10 < 12)    //true or  true -> true
console.log(4 > 3 || 10 > 12)    //true or false -> true
console.log(!(4 > 3))          // false
console.log(!(4 < 3))         // true
console.log(!(false))           //true
console.log(!(4 > 3 && 10 < 12))   //true & true -> true. false
console.log(!(4 > 3 && 10 > 12))  // true & false -> false .. true
console.log(!(4 === '4'))   // true

//There is no 'on' in both dragon and python

let var5 = "python"
let var6 = "jargon"
console.log(!(var5.includes('on') && var6.includes('on')))

//Data Object

// const now = new Date()
// console.log(now)
// console.log(now.getMonth() +1)   // return month 1-11
// console.log(now.getDate())
// console.log(now.getDay())  // sunday- 0 , monday-1
// console.log(now.getHours())
// console.log(now.getMinutes())

// const secondsSinceEpoch = Math.round(now.getTime() / 1000)
// console.log(secondsSinceEpoch)

//Exercises : Level 2 

// const basevalue = prompt("Enter Base Value:")
// const heightvalue  = prompt("Enter Height value:")
// const area = ((basevalue * heightvalue) / 2)
// console.log(`The area of the triangle is ${area}`)

// const A = parseInt(prompt('Enter Side a:'));
// const B = parseInt(prompt('Enter Side b:'));
// const C = parseInt(prompt('Enter Side C:'));
// const perimeter = (A + B + C);
// console.log(`The Perimeter of the triangle ${perimeter}`)

// const length = parseInt(prompt("Enter Length:"))
// const width = parseInt(prompt("Enter width:"))
// const perimeter = 2 * (length + width)
// console.log(perimeter)

// const r = prompt("Enter The value Of radius:")
// const area = parseInt(Math.PI * (r * r)) 
// const circle = parseInt(Math.PI * 2 * r)
// console.log(area)
// console.log(circle)

// const x = prompt("Enter X Value:")
// const y = 2*x -2
// console.log(y)

// const x1 = prompt("Enter X1 value:")
// const x2 = prompt("Enter x2 value:")
// const y1 = prompt("Enter y1 Value:")
// const y2 = prompt("Enter y2 value:")
// const m = (y2 - y1)/(x2 - x1) // x1-2 , y1-2, x2-6,y2-10
// console.log(m)

// console.log(y == m) // ans true or false


//8
// const x = Number(prompt("Enter X Value:"))
// const y = x*x + 6*x + 9
// console.log(y)

// const hours = prompt("Enter Hours:")
// const perhoursrate = prompt("Enter Rate Per Hour:")
// const person = (hours * perhoursrate)
// console.log(person)

// let name = prompt("Enter your name:")
// if (name.length > 7) {
//     console.log("Your Name Is Long")
// }else {
//     console.log("Your name is Short")
// }

// let firstName = prompt("Enter Your first name : ")
// let lastName = prompt("Enter Your last name:")
// if (firstName.length > lastName.length) {
//     console.log("Your firstName, Asabeneh is longer than Your family name, Yetayeh")
// } else {
//     console.log("Your firstName, Asabeneh is Shorter than Your family name, Yetayeh")
// }

// let myAge = prompt("Enter my Age:")
// let yourAge = prompt("Enter your Age:")
// const var1 = myAge - yourAge
// console.log(`I am ${var1} years older than you.`)

// let birth = Number(prompt("Enter Birth Year :"))
// let now = new Date()
// let age = now.getFullYear() - birth;
// if (age >= 18) {
//     console.log("You Are old Enough to Drive")
// } else {
//     console.log("You will be allowed to drive after years.")
// }
// if (age >= 18) {
//     console.log(`you are ${age}. You Are old Enough to Drive`)
// }else {
//     console.log(`You Are ${age}. You will be allowed to drive after ${18- age}.`)
// }
// // year2010- age 12-18 = 6

// const person = prompt("Enter number of years you live:")
// const years = person * 60*60*24*365
// console.log(`You Lived ${years} Seconds.`)

// const now = new Date()
// const year = now.getFullYear() // return year
// const month = now.getMonth() + 1 // return month(0 - 11)
// const date = now.getDate() // return date (1 - 31)
// const hours = now.getHours() // return number (0 - 23)
// const minutes = now.getMinutes() // return number (0 -59)
// console.log(now.getTime())
// console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
// console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
// console.log(`${date}-${month}-${year} ${hours}:${minutes}`)

//Exercises : Level 3

// const now = new Date()
// const year = now.getFullYear() // return year
// const month = now.getMonth() + 1 // return month(0 - 11)
// const date = now.getDate() // return date (1 - 31)
// const hours = now.getHours() // return number (0 - 23)
// const minutes = now.getMinutes() // return number (0 -59)
// console.log(now.getTime())
// console.log(`${date}/${month}/${year} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`)