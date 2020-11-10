const mongoose = require('mongoose');
const { database } = require('./keys');

console.log(process.env.MONGODB_URI);
mongoose.connect(database.URI, {
    useNewUrlParser: true
})
    .then( db => console.log('DB is connected'))
    .catch(err => console.log(err));