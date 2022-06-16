
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const unless = require('express-unless')
const auth = require('./helpers/jwt.js');
const users = require('./controllers/UserController.js')
const errors = require('./helpers/errorHandler.js')

app.use(cors({origin: "http://localhost:3000"})) // Default = CORS-enabled for all origins Access-Control-Allow-Origin: *!
app.use(express.json()) // middleware for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// middleware for authenticating token submitted with requests
/*auth.authenticateToken.unless = unless
app.use(auth.authenticateToken.unless({
    path: [
        { url: '/users/login', methods: ['POST']},
        { url: '/users/register', methods: ['POST']}
    ]
}))*/

app.use('/user', users) // middleware for listening to routes
app.use(errors.errorHandler); // middleware for error responses


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Course Guide application." });
});

// MongoDB connection, success and error event responses
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT} = process.env;
const uri = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to mongo at ${uri}`));


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});