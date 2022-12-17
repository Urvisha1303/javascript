const number = [1, 2, 6, 4, 7, 9, 6]
number[5] = 19
console.log(number)  // 9 ko replace 19

const array = Array()  // blank array
const array1 = []  // blank array

const array3 = Array(7)  // 7777777
console.log(array3)
array3.fill(9, 2, 4)
// console.log(array3)

console.log(number.indexOf(19))
console.log(number.lastIndexOf(6))
//join
const number1 = [1, 2, 6, 4, 7, 9, 6]
// const number2 = [25,36,14,28,29,75]
console.log(number1.join(" : "));
//slice
const number2 = [25, 36, 14, 28, 29, 75]
console.log(number2.slice(2, 4)) // copy original array not modifly

//splice
number2.splice(5, 2) // modifly orginal array
console.log(number2)

const num9 = [1,52,99,852,463,478,2,0,159,32,65,48]
num9.splice(5, 2) // modifly orginal array
console.log(num9)  //[1, 52, 99, 852, 463, 0, 159, 32, 65, 48]
num9.slice(5,2)
console.log(num9)  //[1, 52, 99, 852, 463, 0, 159, 32, 65, 48]




//sort
const number3 = [25, 36, 14, 28, 29, 75];
console.log(number3.sort((a, b) => a - b)); // work in number ascending number
console.log(number3.sort((a, b) => b - a))

const num = ["India", "Vishal", "Komal", "urvisha"]
console.log(num.sort())
console.log(num.sort().reverse())

//filter

const num1 = [1,52,99,852,463,478,2,0,159,32,65,48]
num1.filter(even)

function even(a) 
{
    if (a % 2 === 0) 
    // {
    //     console.log("Even")
    // } 
    {
        return true;
    }
}
// even(a);


// map
const num2 = [1,52,99,852,463,478,2,0,159,32,65,48];
num2.map(plusfive)

function plusfive(a)
{
    const b = a+5;
    return b;
}
// map(6)

//foreach alternative or for

//reduce

const num3 = [1,52,99,852,463,478,2,0,159,32,65,48]
num3.reduce(sum, 1)

function sum(a,b)
{
    const c = a+b;
    return c;
}

// sum(5,6)