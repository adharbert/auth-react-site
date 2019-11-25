const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey:  config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    console.log('payload');
    console.log(payload);
    // See if the user ID in the payload exists in our database
    //  if it does, call 'done' with that other
    //  otherwise, call done without a user object
    User.findById(payload.subdomains, function(err, user) {
        if (err) { return done(err, false); }
        console.log("************* user");
        console.log(user);
        if (user) {
            console.log('found user');
            done(null, user);
        } else {
            console.log('Cannot find user')
            done(null, false);
        }
    });
});


// Tell passport to use this strategy
passport.use(jwtLogin);