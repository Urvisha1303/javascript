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
// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}1