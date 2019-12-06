const faker = require('faker');

/*
const UsersDts = {
    userList: [],
    function() {
        for(i = 0; i < 10; i++) {
            this.userList.push({
                id: i+1,
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                phone: faker.phone.phoneNumber(),
                state: faker.address.stateAbbr()
            });            
        }
    }    
}

UsersDts.proto


class UserDts {
    constructor() {
        this.userList = [];
        for(i = 0; i < 10; i++) {
            this.userList.push({
                id: i+1,
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                phone: faker.phone.phoneNumber(),
                state: faker.address.stateAbbr()
            });            
        }
    }

    getById(id) {
        return this.userList.find(obj => obj.id === id);
    }

    getAll() {
        return this.userList;
    }

}


function UserDts() {
    this.userList = [];
    for(i = 0; i < 10; i++) {
        this.userList.push({
            id: i+1,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            phone: faker.phone.phoneNumber(),
            state: faker.address.stateAbbr()
        }); 
    }

    UserDts.getAll = function() {
        return this.userList;
    };
}

UserDts.prototype.getById = function(id) {
    return this.userList.find(obj => obj.id === id);
};

*/

let UserDts = function() {
    this.userList = [];
    console.log('Hello!');
    for(let i = 0; i < 10; i++) {
        console.log(`Counter: ${i}`);
        this.userList.push({
            id: i+1,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            phone: faker.phone.phoneNumber(),
            state: faker.address.stateAbbr()
        }); 
    }
    let getAll = function GetAll() {
        return this.userList;
    }
}


exports = module.exports = UserDts;