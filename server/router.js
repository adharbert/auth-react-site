const Authentication = require('./controllers/authentication');
const Users = require('./controllers/users');
const passport = require('passport');

// This looks like it's not used, but inside this sets up passport
// with strategies in the middleware.
const passportService = require('./services/passport'); 

// passport tries to make a cookie session, since we're using tokens we are setting session to false.
// Middleware here
const requireAuth = passport.authenticate('jwt', { session: false });   
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function(app) {

    app.get('/api', requireAuth, function(req, res) { 
        res.send({ hi: 'there' });
    });

    app.post('/api/signup', Authentication.signup);
    app.post('/api/signin', requireSignin, Authentication.signin);
    app.get('/api/users', Users.getusers);
    app.get('/api/users/:id', Users.getuserById);
}