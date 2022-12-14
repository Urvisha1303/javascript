//Exercises :Level 1 

//1
const arr = Array()

//2
const number = [1, 5, 8, 9, "Vishal", { Name: "Vishal" }, 15, 19]
console.log(number)

//3
console.log(number.length)

//4
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
console.log(webTechs[0])
console.log(webTechs[parseInt(webTechs.length / 2)])
console.log(webTechs[webTechs.length - 1])

//5
const arr1 = [1, .025, 50.60, true, false, null, undefined, "Mango", "India", { CountryName: "Finland", city: "Surat" }, { Skills: ["HTML", "CSS", "Python", "Javascript"] }]
console.log(arr1)
console.log(arr1.length)
console.log(arr1[1])

//6
const itcompanies = []
itcompanies[0] = "Facebook"
itcompanies[1] = "Google"
itcompanies[2] = "Microsoft"
itcompanies[3] = "Apple"
itcompanies[4] = "IBM"
itcompanies[5] = "Oracle"
itcompanies[6] = "Amazon"

//7., 10.
console.log(itcompanies)

//8.
console.log("Number Of Companies = ", itcompanies.length)

//9.
console.log("First Company: ", itcompanies[0])
console.log("Middle Company: ", itcompanies[parseInt(itcompanies.length / 2)])
console.log("Last Company: ", itcompanies[itcompanies.length - 1])

//11.
// const arr2 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// const company1 = arr2.toUppercase()
// console.log(company1)

//12.
console.log(itcompanies.toString(), "are big IT companies.")

//13.
// const input = prompt("Enter Company Name:")
// if (itcompanies.includes(input)){
//     console.log(`this ${input} company include in array.`)
// }else{
//     console.log(`this ${input} company is not include in array.`)
// }

//14.
const arr2 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//15.
const countries = [
    'Albania',
    'Bolivia',
    'Japan',
    'Kenya',
    'Canada',
    'Germany',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Hungary',
    'Ireland',

]
console.log(countries.sort())

//16.
console.log(countries.reverse())

//17.first 3 element findout
console.log("First 3 Element:", countries.slice(0, 3))

//18.last 3 element findout
console.log("Last 3 Element:", countries.slice(countries.length - 3))

//19.* middle element find
const var2 = parseInt(itcompanies.length / 2)
console.log("Middle itCompaines:", itcompanies.slice(var2, var2 + 1))

//20.shift = first element remove
console.log(itcompanies.shift())
console.log(itcompanies)

//21.*
  const v = parseInt(itcompanies.length/2)
  console.log(itcompanies.splice(v,1))

//22.
console.log(itcompanies.pop())

//23.
console.log(itcompanies.splice(0, itcompanies.length))
console.log(itcompanies)

//Exercises :Level 2

//1. main.js file

//2.
let txt =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(" ")
console.log(words)
console.log(words.length)

//3.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
console.log(shoppingCart)
shoppingCart.push("Sugar")
console.log(shoppingCart)
const removed= shoppingCart.splice(4,1)
console.log(removed)
console.log(shoppingCart)
console.log(shoppingCart.indexOf("Tea"))
shoppingCart[3] = "Geern Tea"
console.log(shoppingCart)

//4.
const countries1 = [
    'Albania',
    'Bolivia',
    'Japan',
    'Kenya',
    'Canada',
    'Germany',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Hungary',
    'Ireland',
]
// const country_code = countries1.filter(country => (country_name ==="'ETHIOPIA'"));
// console.log(country_code)
if(countries1.includes('Ethiopia')){
    console.log('ETHIOPIA')
}else{
    countries1.push('Ethiopia')
    console.log(countries1)
}
//5.


//6.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack= frontEnd.concat(backEnd)
console.log(fullStack)

//Exercises :Level 3

//1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort((a, b) => a - b));
let a = Math.min(...ages);
let max = Math.max(...ages);
console.log(a)
console.log(max)

const ages1 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sordata = ages1.sort((a,b) => a - b);
console.log(sordata)  //[19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
let element = sordata.length;  // 10
if(element % 2 === 0){
    let median1 = element / 2;  //5
    let median2 =element / 2-1;  //4
    const ele1 = sordata[median2];  //sortdata[4]  //24
    const ele2 = sordata[median1];  // 24
    let median= (ele1 + ele2) / 2;
    console.log(median)
}
else{
    let median1 = parseInt(element/2);  // 4
    let median = sordata[median]
    console.log(median1)
}


