//Exercises: Level 1
//1.
const dog = {}  // empty object

//2.
const dog1 = {

}
console.log(dog1)  // dog object

//3.
const dog3 = {
    name: 'Minki',
    legs: 'skincolor',
    color: 'white',
    age: '6years',
    bark: 'wroof wroof'

}
console.log(dog3.bark) // return wroof wroof

//4.
const dog4 = {
    name: 'Minki',
    legs: 'skincolor',
    color: 'white',
    age: '6years',
    barkproperties: 'wroof wroof'

}
console.log(dog4)

//5.
dog4.object = ['breed', 'getDogInfo']
console.log(dog4)  // add object

//Exercises: Level 2
//1.
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
console.log(users.Paul)
let c = Object.entries(users).filter(([_, user]) => user.skills.includes("MongoDB", "Express", "React", "Node"))
console.log(c)

//1.
const d = Object.values(users)
console.log(d)
let winner;
let max = 0
for (const user in users) {
    if (users[user].skills.length > max) {
        max = users[user].skills.length;
        winner = user
    }
}
console.log(winner)

//2.
// let count =0
// for(const user of d){
//     console.log(user.points)
//     if (user.points >=50){
//         console.log(typeof(user.points >=50))
//         count += 1
//     }
// }
// console.log(count)
// let loggedInUser = 0
// for(const user of d){
//     console.log(user.isLoggedIn)
//     if(user.isLoggedIn){
//         loggedInUser += 1

//     }
// }
// console.log(loggedInUser)

//3.


//4.
const urvisha = Object.assign({}, users)
console.log(urvisha)

//5.
console.log(Object.entries(users))

//6.
console.log(Object.values(users))

//7.
users.country = {
    name: "Nigeria",
    capital: "?",
    population: "7 billion",
    languages: ["hausa", "igbo", "yoruba"]
}
console.log(users.country)
console.log(users)

const a = Object.values(users).filter(user => user.isLoggedIn).length
console.log(a)
const b = Object.values(users).filter(user => user.points >= 50).length
console.log(b)

// let c = Object.entries(users).filter(([_, user]) => user.skills.includes("MongoDB", "Express", "React", "Node"))
// console.log(c)

//Exercises: Level 3
//1.
let personAccount = {
    fisrtName: 'Urvisha',
    lastName: 'Bambhroliya',
    incomes: {
        salary: 50000
    },
    expenses: {
        food: 10000,
        transport: 7000
    },
    totalIncome: function(){
        let tIncome = 0;
        let values = Object.values(this.incomes)
        for(let i= 0;i<values.length ; i++){
            tIncome+= values[i]
        }
        return tIncome;
    },
    totalExpenses: function(){
        let tExpenses = 0;
        let values = Object.values(this.expenses)
        for(let i=0; i<values.length; i++){
            tExpenses += values[i]
        }
        return tExpenses;
    },
    accountBalance: function(){
        return this.totalIncome() - this.totalExpenses();
    },

    accountinfo: function(){
        return `totalIncome: ${this.totalIncome()};
        totalExpenses: ${this.totalExpenses()};
        accounBalance: ${this.accountBalance()}
        `
    }
}
console.log(personAccount.accountinfo())

//2.
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

