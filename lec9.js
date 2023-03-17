//foreach

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','England']
countries.forEach((Element) => console.log(Element))


// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// names.forEach((Element) => (console.log(Element)))
// countries.forEach(country => console.log(country));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach((arr) => console.log(arr))

//map

const newcountries = countries.map((num) => num.toUpperCase())
console.log(newcountries)

const contrylength = countries.map(country => country.length)
console.log(contrylength)

//Use map to create a new array by changing each number to square in the numbers array
const newnumbers = numbers.map(num => num * num);
console.log(newnumbers)

//Use map to change to each name to uppercase in the names array
// const newname = names.map(name => name.toUpperCase());
// console.log(newname)

//Use map to map the products array to its corresponding prices.

// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
//   ]
// const newproduct = products.map(product => product.price)
// console.log(newproduct)

//filter

//Use filter to filter out countries containing land.
const containingland = countries.filter(country => country.includes("land"))
console.log(containingland)

//Use filter to filter out countries having six character.
const filtercountries = countries.filter(country => country.length !== 6)
console.log(filtercountries)

//Use filter to filter out countries containing six letters and more in the country array.

const filtercountries1 = countries.filter(country => country.length < 6)
console.log(filtercountries1)

//Use filter to filter out country start with 'E';
const filtercountries2 = countries.filter(country => country.startsWith('E'))
console.log(filtercountries2)

//Use filter to filter out only prices with values.
// const filtercountries3 = products.filter(country => +country.price)
// console.log(filtercountries3)

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const namearray = ['ccasf','qfsaf','cxsd','2','','45',123]
const getStringLists = namearray.filter(namearray => typeof namearray === 'string')
console.log(getStringLists)

//Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((acc,cur)=> acc + cur);
console.log(sum)

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark,
// Norway, and IceLand are north European countries


//Use some to check if some names' length greater than seven in names array
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const namelength = names.some((name) => name.length > 7);// any one work isgrenter than 7 it's true

console.log(namelength)

//Use every to check if all the countries contain the word land
const countriess = ['Finland', 'Iceland', 'Switzerland', 'Greenland', 'New Zealand']

const countrie = countriess.every(country => country.includes('land')) // all word available in varaible it's true 
console.log(countrie)

//Use find to find the first country containing only six letters in the countries array

// const result = countries.find(name => name.length === 6)
// console.log(result)

//Use find to find the first country containing only six letters in the countries array
// const result = countries.findIndex(name => name.length === 6);
// console.log(result)

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// const countries1 = ['Finland', 'Sweden', 'Denmark', 'IceLand','England']
// const result = countries1.findIndex(name => name.includes('Norway'));
// console.log(result)

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const countries1 = ['Finland', 'Sweden', 'Denmark', 'IceLand','England']
const result = countries1.findIndex(name => name.includes('Russia'));
console.log(result)


//Exercises: Level 2

//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const products = [
  { product: 'banana', price: 3 ,instock: true},
  { product: 'mango', price: 6, instock: false },
  { product: 'potato', price: ' ', instock: false },
  { product: 'avocado', price: 8 , instock: true},
  { product: 'coffee', price: 10 , instock : true},
  { product: 'tea', price: '' , instock: false},
]

const totalprice = products.map(product=> product.instock).filter(product =>product.price).reduce((total, price) => total + price , 0)
console.log(totalprice)