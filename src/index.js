const express = require('express');
const config = require('./config');

// Database
require('./database');

const app = config(express());

// Init server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})