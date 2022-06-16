const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


const uri = 'mongodb://0.0.0.0:7017/course_guide'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to mongo at ${uri}`));