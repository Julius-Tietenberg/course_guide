/*
const MongoClient = require('mongodb').MongoClient;

// const { url } = require('./config/db.config')
// Connect URL
// const url = 'mongodb://127.0.0.1:27017';
const url = 'mongodb://0.0.0.0:7017'

// Connec to MongoDB
MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log(err);
    }

    // Specify database you want to access
    const db = client.db('course_guide');
    db.

    console.log(`MongoDB Connected: ${url}`);
});
*/


// const uri = 'mongodb://0.0.0.0:7017'
const uri = 'mongodb://0.0.0.0:7017/course_guide'
const mongoose = require('mongoose')
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to mongo at ${uri}`));