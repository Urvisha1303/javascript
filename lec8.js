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
    legs : 'skincolor',
    color: 'white',
    age :'6years',
    barkproperties: 'wroof wroof'

}
console.log(dog3.barkproperties) // return wroof wroof

//4.
const dog4 = {
    name: 'Minki',
    legs : 'skincolor',
    color: 'white',
    age :'6years',
    barkproperties: 'wroof wroof'

}
console.log(dog4)

//5.
dog4.object = ['breed','getDogInfo']
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


const a = Object.values(users).filter(user => user.isLoggedIn).length
console.log(a)
const b = Object.values(users).filter(user => user.points >= 50).length
console.log(b)
const c = Object.entries(users).filter(([_, user]) => user.skills.includes("MongoDB", "Express", "React", "Node")).map(([name]) => name).join(", ")
console.log(c)