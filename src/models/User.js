'use strict';

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = schema({
    email: String,
    password: String,
    image: String,
    status: {
        type: String,
        enum : ['ACTIVE','INACTIVE'],
        default: 'ACTIVE'
    }
});

module.exports = mongoose.model('User', userSchema);