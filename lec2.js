let x; //undefined
let y = undefined;
let a= 5;

//object
//1.>Array[] ->loop arrary
//2.>object {} --> key:value
//3.>function -> ()


//math object(inbulit functions)
const pi = Math.PI;  // 3.14
console.log(Math.round(4.625389))
console.log(Math.floor(4.625389))
const minimum = Math.min(3,6,2,8,9,4)
console.log(minimum)

const maximum = Math.max(4,5,9,8,6,3)
console.log(maximum)

const random = Math.random() // 0 to 1 value provieded
console.log(random * 100)  // multiple by 100 to 0 to 100 value provieded

// Math.abs
console.log(Math.abs(-10)) // negative number ko postive me convert
console.log(Math.sqrt(16))// square root
console.log(Math.pow(6, 3))   // power 

let v1 = "30 Days Of JavaScript"
console.log("Hello,I am using String")

console.log(v1.lenght)

console.log(v1.toUpperCase())
console.log(v1.toLowerCase())

let v2 = "hello world"
console.log(v2.substr(0,22))
console.log(v2.substring(0,25))

console.log(v1.slice(3,25))

console.log(v1.includes("Days"))

console.log(v1.split(''))
console.log(v1.split(' '))

const v4 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const challange = v4.split(",");
console.log(challange);

console.log(v1.replace("JavaScript", "Python"))

console.log(v1.charAt(15))

console.log(v1.charCodeAt(11))

console.log(v1.indexOf('a'))

console.log(v1.lastIndexOf('a'))

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))

let v9 = "    30 Days Of JavaScript  "
console.log(v9.trim(' '))
console.log(v9.startsWith("Days"))
console.log(v9.endsWith("Of"))
// console.log(v9.match('a'))

let v7 = '30 Days of' 
let v6 =  'JavaScript'
console.log(v7.concat(' ' , v6))

console.log(v1.repeat(2))

console.log('There is no exercise better for the heart than reaching down and lifting people up.')

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

let var2 = "10"
let var3 =  10
let var4 = parseInt(var2)
// let va5 = Number(var2)
// let va6 = +(var2)
console.log(typeof var4)
console.log(typeof var3)

let var5 = "python"
let var6 = "jargon"
console.log(var5.search('on'))  / 

//includes 

// floor = minimum value 
// round = maximum value
// const var9 = Math.floor(Math.random()*100)
// console.log(var9)

// const var10 = Math.round(Math.random()*(100-50)+ 50)
// console.log(var10)

// const var11 = Math.round(Math.random()*255)
// console.log(var11)

console.log(" 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125")

let var1 = 'You cannot end a sentence with because because because is a conjunction'
let result = var1.substr(31,23)
console.log(result)

const sentence3 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
const occurrences = sentence3.match(/love/gi); // (g is is for match all occurrences, i is for case insensitive)
console.log("number of occurrences of 'love'", occurrences.length)

const text = 'He earns 5000 euro from salary per\ month, 10000 euro annual bonus, 15000 euro\ online courses per month.';
const arr  = text.match(/\d+/g);
console.log(+arr[0]*12 + +arr[1] + +arr[2]*12)