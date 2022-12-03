const firstName = 'Urvisha'
const lastName = 'Bambhroliya'
const country = 'India'
const city = 'Surat'
const age = 24
const isMarried = 'no'
const year = 2022


//const v1 = parselInt('9.8')
//const v2 = '10'



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

