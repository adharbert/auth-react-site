const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define Model
const userSchema = new Schema({
    email: { 
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

// On Save Hook, encrypt password
//  before save, this runs
userSchema.pre('save', function(next) {
    const user = this;

    // generate salt, then run callback
    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }

        // hash password using salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) { return next(er); }

            // overwrite plain text password with encrypted pwd
            user.password = hash;
            next();
        });
    });
});

// Create teh model class
const ModelClass = mongoose.model('user', userSchema);


// Export the model
module.exports = ModelClass;