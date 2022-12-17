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

//13.
