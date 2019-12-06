const UserDts = require('../data/userDts');

exports.getusers = function(req, res, next) {
    debugger;
    res.send(UserDts.getAll());
    
}


