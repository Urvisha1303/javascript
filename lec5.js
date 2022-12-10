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
console.log(webTechs[Math.floor(webTechs.length / 2)])
console.log(webTechs[webTechs.length - 1])

//5
const arr1 = [1, .025, 50.60, true, false, null, undefined, "Mango", "India", { CountryName: "Finland", city: "Surat" }, { Skills: ["HTML", "CSS", "Python", "Javascript"] }]
console.log(arr1)

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
console.log("Middle Company: ", itcompanies[Math.floor(itcompanies.length / 2)])
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
const var2 = Math.floor(itcompanies.length / 2)
console.log("Middle itCompaines:", itcompanies.slice(var2, var2 + 1))

//20.shift = first element remove
console.log(itcompanies.shift())
console.log(itcompanies)

//21.*
//   const v = Math.floor(itcompanies.length/2)
//   console.log(itcompanies.slice(v,1))

//22.
console.log(itcompanies.pop())

//23.
console.log(itcompanies.splice(0, itcompanies.length))
console.log(itcompanies)

//Exercises :Level 2
