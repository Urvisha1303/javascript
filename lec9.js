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

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
const newproduct = products.map(product => product.price)
console.log(newproduct)

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
const filtercountries3 = products.filter(country => +country.price)
console.log(filtercountries3)

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
const namelength = names.some((name) => name.length > 7);

console.log(namelength)


