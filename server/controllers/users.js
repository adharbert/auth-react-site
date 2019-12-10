const UserDts = require('../data/userDts');

exports.getusers = function(req, res, next) {
    debugger;
    res.send(UserDts.getAll());
    
}

// '+' casts to number value
exports.getuserById = function(req, res, next) {
    res.send(UserDts.getById(+req.params.id));
}


