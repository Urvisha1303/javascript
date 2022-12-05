const firstName = 'Urvisha'
const lastName = 'Bambhroliya'
const country = 'India'
const city = 'Surat'
const age = 24
const isMarried = 'no'
const year = 2022


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

const now = new Date()
console.log(now)
console.log(now.getMonth() +1)   // return month 1-11
console.log(now.getDate())
console.log(now.getDay())  // sunday- 0 , monday-1
console.log(now.getHours())
console.log(now.getMinutes())

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
// const y = prompt("Enter Y Value:")
// const both = 2*x -2
// console.log(both)


// const hours = prompt("Enter Hours:")
// const perhoursrate = prompt("Enter Rate Per Hour:")
// const person = (hours * perhoursrate)
// console.log(person)