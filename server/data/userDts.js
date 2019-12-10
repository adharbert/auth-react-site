const faker = require('faker');
let nextId = 0
class UserModel {
    constructor(firstName, lastName, phone, state) {
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
        this.state = state
        this.id = nextId++
        userModels.push(this)
    }
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