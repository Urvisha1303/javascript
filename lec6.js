// Exercises: Level 1
// 1.
// const i = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i<=10; i++){
//     console.log(i)
// }

// // let i = 0
// // while(i<=10){
// //     console.log(i)
// //     i++
// // }

// let i = 0;
// do{
//     console.log(i)
//     i++
// }while(i<=10)

//2.
// const i = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 10; i>=0; i--){
//     console.log(i)
// }

// let i = 10;
// while (i >= 0) {
//     console.log(i)
//     i--
// }

// let i = 10;
// do{
//     console.log(i)
//     i--
// }while (i >= 0);

//3.
// const n = prompt("Enter Number:");
// for (let i=0; i<=n; i++){
//     console.log(i);
// }

//4.
// let n =7;
// let string = "";
// for (let i=1; i<=n; i++){
//     for (let j=0; j<i; j++){
//         string += "#";
//     }
//     string += "\n";
// }
// console.log(string)

//5.
// for (let i = 0; i<=10; i++){
//     console.log(`${i} * ${i} = ${i * i}`)
// }

//6.
// for (let i = 0; i<=10; i++){
//     console.log(`${i} * ${i*i} = ${i * i * i}`)
// }

//7.
// for (let i= 0; i<=100; i++){
//     if (i%2===0){
//         console.log( i + "Is Even");
//     }
// }

//8.
// for (let i= 0; i<=100; i++){
//     if (i%2!==0){
//         console.log( i + " Is Odd");
//     }
// }

//9.
// let n = 0;
// for (let j = 2; j <= 100; j++) {
//     for (let i = 1; i <= j; i++) {
//         if (j % i == 0)
//             n++
//     }
//     if (n == 2)
//         console.log(j)
//          n = 0
// }

//10.
// const n = parseInt(prompt("Enter Sum Of Number:"))
// let sum = 0;
// for(let i=1; i <=n; i++){
//     sum += i;
// }
// console .log(`The sum of all numbers from 0 to 100 is ${sum}.`)

//11.
// const n = parseInt(prompt("Enter Sum of Number :"))
// let even = 0;
// let odd = 0;
// for (let i = 1; i <= n; i++){
//     if (i%2===0){
//         even += i;
//     }else{
//         odd += i;
//     }
// }

// console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}.`)

//12.
// const n = parseInt(prompt("Enter Sum of Number :"))
// let even = 0;
// let odd = 0;
// for (let i = 1; i <= n; i++){
//     if (i%2===0){
//         even += i;
//     }else{
//         odd += i;
//     }
// }
// console.log(`${even}, ${odd}`)

//13.*

// const arr = [];
// let result;
// for(let i=0; i<5; i++)
// {
//     result = Math.random();
//     arr.push(result)
// }
// console.log(arr)

//14.
// let arr = [];
// while(arr.length < 5){
//     let r = Math.floor(Math.random() * 100) + 1;
//     if(arr.indexOf(r) === -1) arr.push(r);
// }
// console.log(arr);

//15.

//Exercises: Level 2

//1.
const charaters = 'jfhqifhqwfjewohiwkmgksjqoyrh2649529526574';
function y(length) {
    let result = '';
    const charatersLength = charaters.length;
    for (let i = 0; i < length; i++) {
        result += charaters.charAt(Math.floor(Math.random() * charatersLength));
    } return result;
}

console.log(y(13));

const charaters1 = "viajwiuqpxncxmvnwtrol29865174962259adgjhgf8qgr"
function a(length) {
    let result = ' ';
    const charatersLength1 = charaters1.length;
    for (let i = 0; i < length; i++) {
        result += charaters1.charAt(Math.floor(Math.random() * charatersLength1))
    }
    return result;
}
console.log(a(26))

//2.
const charaters2 = "'v','i','a','j','w','i','u','p','q','x','n','m','c','s','d','f','g','h','k','l','e','r','t','y',',2,9,8,6,51,7,49,6,2,2,59"
function c(length) {
    let result = '#';
    const charatersLength2 = charaters2.length;
    for (let i = 0; i < length; i++) {
        result += charaters1.charAt(Math.floor(Math.random() * charatersLength2))
    }
    return result;
}
console.log(c(28))

//3.

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// const newArr = []
// for (const country of countries) {
//     newArr.push(country.toUpperCase())
// }
// console.log(newArr)

//5.

// const newlength = []
// for (const country of countries) {
//     newlength.push(country.length);
// }
// console.log(newlength)

//6.
// const arr = []
// for (const country of countries) {
//     arr.push([country, country.slice(0, 3), country.length]);
// }
// console.log(arr)

//7.
// const arr = []
// for(let i = 0; i < countries.length; i++){
//     if(countries[i].includes('land'));
//     arr.push(countries[i]);
// }
// console.log(arr)

//8.
// const arr= []
// for (let i = 0; i < countries.length; i++){
//     if(countries[i].includes('ia'));
//     arr.push(countries[i]);
// }
// console.log(arr)

//9.


//12.
// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

// const arr = []
// for (const country of webTechs) {
//     arr.push([country, country.length]);
// }
// console.log(arr)

//12.
//14.

// const arr = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// for (let array of arr){
//     console.log(array)
// }


// const i = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 10; i>=0; i--){
//     console.log(i)
// }


//15.
// const  fruit = ['banana', 'orange', 'mango', 'lemon']
// let newArray = [];
//   for (let i = fruit.length - 1; i >= 0; i--) {
//     newArray.push(fruit[i]);
//   }
// console.log(newArray)

//16.
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
