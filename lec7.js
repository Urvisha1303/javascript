//Exercises: Level 1

//1.
// function fullName() {
//     let first = "Urvisha"
//     let last = "Bambhroliya"
//     let fullname = first + " " + last
//     console.log(fullname)
// }
// fullName()

//2.
// function fullName() {
//     let first = "Urvisha"
//     let last = "Bambhroliya"
//     let fullname = first + " " + last
//     return fullname
// }
// console.log(fullName())

//3.
// function addNumbers(para1, para2) {
//     let sum = para1 + para2
//     return sum
// }
// console.log(addNumbers(10,20))

//4.
// function areaOfRectangle(length , width) {
//     let area = length * width
//     return area
// }
// console.log(areaOfRectangle(20, 5))

//5.
// function perimeterOfRectangle( length, width) {
//     let perimeter = 2 * (length + width)
//     return perimeter
// }
// console.log(perimeterOfRectangle(2, 5))

//6.
// function volumeOfRectPrism(length, width, height) {
//     let volume = length * width * height
//     return volume
// }
// console.log(volumeOfRectPrism(20, 10, 50))

//7.
// function areaOfCircle(r){
//     let area = Math.PI * r * r
//     return area

// }
// console.log(areaOfCircle(8))

//8.
// function circumOfCircle(r){
//     let circumference = 2 * Math.PI * r
//     return circumference
// }
// console.log(circumOfCircle(4))

//9.
// function denstiny(mass, volume){
//     let Density = mass / volume
//     return Density
// }
// console.log(denstiny(50, 2))

//10.
// let distance = parseInt(prompt("Enter Distance:"))
// let time = parseInt(prompt("Enter time:"))

// function speed(distance , time){
//     let spead = distance / time
//     return spead
// }
// console.log(speed(distance, time))

//11.

// let mass = parseInt(prompt("Enter mass:"))
// let gravity = parseInt(prompt("Enter gravity:"))
// function weight(mass, gravity){
//     let weight1 = mass * gravity
//     return weight1
// }
// console.log(weight(mass, gravity))

//12.
// function convertToF(celsius) {
//     let oF = celsius * 9/5 + 32
//     return oF
//   }

// console.log(convertToF(33))

//13.
// let Kg = parseInt(prompt("Enter weight : "))
// let m2 = parseInt(prompt("Enter Height : "))
// function BMI(Kg, m2) {
//     let m1 = Kg / (m2 * m2) 
//     // return m1
//     // console.log(BMI(Kg, m2))
//     if (m1 < 18.5) {
//         console.log("Underweight")
//     }
//     else if (m1 >= 18.5 && m1 < 24.9) {
//         console.log("Normal Weight")
//     }
//     else if (m1 >= 25 && m1 < 29.9) {
//         console.log("Overweight")
//     }
//     else{
//         console.log("Obese")
//     }      
// }
// BMI(Kg, m2)

//14.
// const month = prompt("Enter the month:")
// function checkSeason(month){
//     if(month==="September" || month==="Octomber" || month==="November"){
//         console.log("This season is Autumn")
//     }else if(month==="December"|| month==="January" || month==="february"){
//         console.log("Winter")
//     }else if(month==="March" || month==="April" || month==="May"){
//         console.log("Spring")
//     }else{
//         console.log("Summer")
//     }

// }
// checkSeason(month)

//15.
// function findMax() {
//     let i;
//     let max = -Infinity;
//     for (i = 0; i < arguments.length; i++)
//      {
//         if (arguments[i]>max){
//             max = arguments[i];
//         }  
//     }
//     return max
// }
// console.log(findMax(0, 10, 5))
// console.log(findMax(0, -10, -2))

//Exercises: Level 2


//1.
// const a = +prompt("Enter A:")
// const b = +prompt("Enter B:")
// const c = +prompt("Enter C:")

// function linearEq(a1,b1,c1) {
//     const x1 = 0;
//     const y2 = 0;
//     let x2 = 0;
//     let y1 = 0;

//     y1 = (c1 / b1) * -1;
//     x2 = (c1 / a1) * -1;
//     return [x1,y1,x2,y2]
//     //console.log(`(${x1}, ${y1}) (${x2}, ${y2})`)
// }
// const [x1,y1,x2,y2] = linearEq(a,b,c); 
// console.log(`(${x1}, ${y1}) (${x2}, ${y2})`)

//2.
// let root1, root2;
// // let a = prompt("Enter first number: ")
// // let b = prompt("Enter second Number: ")
// // let c = prompt("Enter Third Number: ")
// function solveQuadEquation(a, b, c) {
//     let discriminat = b * b - 4 * a * c;
//     if (discriminat > 0) {
//         root1 = (-b + Math.sqrt(discriminat)) / (2 * a);
//         root2 = (-b - Math.sqrt(discriminat)) / (2 * a);
//         console.log(`${root1} , ${root2}`)
//     }
//     else if (discriminat === 0) {
//         root1 = root2 = -b / (2 * a);
//         console.log(`${root1}, ${root2}`)
//     }
//     else {
//     }
// }

// solveQuadEquation() // {0}
// solveQuadEquation(1, 4, 4) // {-2}
// solveQuadEquation(1, -1, -2) // {2, -1}
// solveQuadEquation(1, 7, 12) // {-3, -4}
// solveQuadEquation(1, 0, -4) //{2, -2}
// solveQuadEquation(1, -1, 0) // {1, 0}

//3.
//  let array = ['hello','ghagd','bxjh','bsjhd']
//  function printArray(a){
//     for (let i=0; i<a.length; i++){
//         console.log(a[i])
//      }
//  }

//  printArray(array)

//4.
const showDateTime = (format = 'dd//mm/yyyy') => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    const now = new Date() //
    const dd = now.getDate() //08 dd
    const month = now.getMonth() //00
    const monthInWord = months[now.getMonth()] //January //Month
    let mm = now.getMonth() + 1 //01 //mm
    const year = now.getFullYear() //2023 //yyyy
    let hh = now.getHours() //15 //hh
    let minutes = now.getMinutes() //mm

    switch (format) {
        case 'dd/mm/yyyy hh:mm':
            return `${dd}/${mm}/${year} ${hh}:${minutes}`
            break;
        case 'd Month yyyy':
            return `${dd} ${monthInWord} ${year}`
            break;
        default:
    }
    // const dateMonthYear = `${month} ${date} ${year}`
    // const time = hours + ':' + minute
}
console.log(showDateTime('dd/mm/yyyy hh:mm'))
console.log(showDateTime('d Month yyyy'))

// 8 January 2021

//5.
// function swap(x, y) {
//     var t = x;
//     x = y;
//     y = t;
//     return [x, y];
// }

// console.log(swap(3, 4)) // x => 4, y=>3
// console.log(swap(4, 5)) //  x = 5, y = 4

//6.
// let array1 = [1,2,3,4,5,6];
// let array2 = ['A','B','C','D']
// function reverseArray(arr){
//     let newArray = [];
//     for(let i = arr.length - 1; i>=0 ; i--)
//     {
//         newArray.push(arr[i]);
//     }
//     return newArray;
// }
// console.log(reverseArray(array1))
// console.log(reverseArray(array2))

//7.
// const a= ['apple','banana','cargo']
// function capitalizeArray(capitalizedarray) {
//     const newArr = []
//     for (const country of capitalizedarray) {
//         newArr.push(country.toUpperCase())
//     }
//      return newArr
// }
// console.log(capitalizeArray(a));

//8.
// let newArr = []
// function additem(item) {

//     newArr.push(item)
//     return newArr
// }
// console.log(additem("Hello"))
// console.log(additem("Hello1"))

//9.
// const a = ['apple', 'banana', 'cargo', 'afas', 'afg']
// function removeitem(index) {
//     let b = a.splice(index)
//     return b
// }
// console.log(removeitem(3, 0))

//10.
function sumOfNumbers(number){
    let sum = 0;
    for (let i=0; i<number;i++){
        sum += i;
    }
    return sum;
}

console.log(sumOfNumbers(15))

//11.
function sumOfOdds(number) {
    let sum = [];
    for (let i = 0; i < number; i++) {
        if (i % 2 === 1) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfOdds(['100']))

//12.
function sumOfEven(number) {
    let sum = [];
    for (let i = 0; i < number; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfEven(['100']));

//13.
function evensAndOdds(number) {
    let even = 0;
    let odd= 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            even++;
        }
        else{
            odd++;
        }
    }
    return `${even} \n ${odd}`;
    
}
console.log(evensAndOdds(100));

//14.
let generateRandomIp = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    let four = Math.floor(Math.random() * 255);
    return `IP: ${one}:${two}:${three}:${four}`
}
console.log(generateRandomIp());