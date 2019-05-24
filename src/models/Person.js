'use strict';

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = schema({
    givenName: String,
    middleName: String,
    familyName: String,
    gender: {
        type: String,
        enum : ['MALE','FEMALE'],
        default: 'MALE'
    },
    birthdate: Date
});

module.exports = mongoose.model('User', userSchema);