const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    // create token with specific fields.
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret); // iat = issued at time
}

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    console.log('sign up called');
    console.log(req.body);

    if (!email || !password) {
        return res.status(422).send({ error: 'You must provide email and password' });
    }

    // check if user with email exists
    User.findOne({ email: email }, function(err, existingUser) {
        if (err) { 
            console.log('error in look up');
            return next(err); 
        }

        // if email does exist, return an error
        if (existingUser) {
            console.log('email in use');
            return res.status(422).send({ error: 'Email is in use' });
        }

        // if email does not exist, create and save new record
        const user = new User({
            email: email,
            password: password
        });
        user.save(function(err) {
            if (err) { 
                console.log('error saving');
                return next(err); 
            }
            
            // respond to request
            console.log('success in creating and saving');
            res.json({ token: tokenForUser(user) });

        });       
    });
}