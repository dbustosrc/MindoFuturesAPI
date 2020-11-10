'use strict'

var express = require('express');
var userController = require('../controllers/User');
var md_auth = require('../middlewares/authenticated');
//var multipart = require('../node_modules/connect-multiparty');
//var md_updload = multipart({ uploadDir: './uploads/users/' });
var api = express.Router();

api.post('/registerUser', userController.saveUser);
api.post('/loginUser', userController.loginUser);
//api.put('/updateUser/:id', md_auth.ensureAuth, userController.updateUser);
//api.post('/upload-image-user/:id', [md_auth.ensureAuth, md_updload], userController.uploadImage);
//api.get('/get-image-user/:imageFile', userController.getImageFile);

module.exports = api;