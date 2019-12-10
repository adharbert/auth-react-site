const faker = require('faker');
let nextId = 1
class UserModel {    
    constructor(firstName, lastName, phone, state) {
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
        this.state = state
        this.ContractId = getLetter() + getNumber()
        this.id = nextId++
        userModels.push(this)
    
    }
}

function getNumber() {
    let result = Math.floor(Math.random()*9000000) + 1000000;
    return result;
}

function getLetter() {
   return Math.random().toString(36).substring(2, 3).toUpperCase();
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generate(n) {
    var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   

    if ( n > max ) {
            return generate(max) + generate(n - max);
    }

    max        = Math.pow(10, n+add);
    var min    = max/10; // Math.pow(10, n) basically
    var number = Math.floor( Math.random() * (max - min + 1) ) + min;

    return ("" + number).substring(add); 
}

// class UserRepository {
//     constructor() {
//         this.userModels = []
//     }
//     getById(id) {
//         return this.userModels.find(u => u.id === id)
//     }
//     getAll() {
//         return this.userModels
//     }
// }

//module.exports = new UserRepository()

let userModels = []
let AccountDetails = {}
const createFake = () => new UserModel(faker.name.firstName(), faker.name.lastName(), faker.phone.phoneNumber(), faker.address.stateAbbr())
const getAll = () => userModels
const getById = (id) => userModels.find(u => u.id === id)

Array.from(new Array(20)).forEach(createFake)

module.exports = {
    createFake,
    getAll,
    getById,
    UserModel 
}

// let UserDts = function() {
//     this.userList = [];
//     console.log('Hello!');
//     for(let i = 0; i < 10; i++) {
//         console.log(`Counter: ${i}`);
//         this.userList.push({
//             id: i+1,
//             firstName: faker.name.firstName(),
//             lastName: faker.name.lastName(),
//             phone: faker.phone.phoneNumber(),
//             state: faker.address.stateAbbr()
//         }); 
//     }
//     getAll = function(){
//         return this.userList;
//     }
// }



// exports = module.exports = UserDts;