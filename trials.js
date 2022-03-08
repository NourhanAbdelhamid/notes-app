// const car = {
//     name:"BMW",
//     color:"Black"
// }
// car.name = "toyota"
// console.log(car)
// console.log(car.name)

// // { name: 'BMW', color: 'Black' } object

// // {"name":"BMW","color":"Black"} json

// // convert object to json (stringfy)

// const carJson = JSON.stringify(car)
// console.log(carJson)
// console.log(carJson.name)  //undefined I can not access json

// // convert json to object (parse)
// const carObject = JSON.parse(carJson)
// console.log(carObject)
// console.log(carObject.name)

// ///////////////////////////////////////////////////////////////////////

const fs = require('fs')
// fs.writeFileSync('test.json',carJson)
// const x =fs.readFileSync('test.json').toString()
// console.log(x)
//////////////////////////////////////////////////////////////////////////

/**
 * Task
 * 1) Create object person name age
 * 2) change object --> json 
 * 3) store in file
 * 4) read file (json)
 * 5) convert to object 
 * 6) update data change value of object
 * 7)object to json 
 * 8) writeFileSync
 */

const person = {
    name:'Yassin',
    age:40
}
const personJson = JSON.stringify(person)
console.log(personJson)

fs.writeFileSync('person.json',personJson)
//////////////////////////////////////////////////////////////////


const data = fs.readFileSync('person.json').toString()
console.log(data)

const dataObject = JSON.parse(data)
console.log(dataObject)
dataObject.name = 'Amr'
dataObject.age = 50

const newJson = JSON.stringify(dataObject)
fs.writeFileSync('person.json',newJson)

