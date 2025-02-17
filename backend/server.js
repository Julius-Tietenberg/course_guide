
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const unless = require('express-unless')
const auth = require('./helpers/jwt.js');
const users = require('./controllers/UserController.js')
const courses = require('./controllers/CourseController.js')
const ratings = require('./controllers/RatingMessageController.js')
const dashboards = require('./controllers/DashboardCourseController.js')
const errors = require('./helpers/errorHandler.js')

app.use(cors({origin: "http://localhost:3000"})) // Default = CORS-enabled for all origins Access-Control-Allow-Origin: *!
app.use(express.json()) // middleware for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// module.exports.authenticateWithExpressJWT = verifyJwt;

// middleware for authenticating token submitted with requests
/*auth.authenticateToken.unless = unless
app.use(auth.authenticateToken.unless({
    path: [
        { url: '/users/login', methods: ['POST']},
        { url: '/users/register', methods: ['POST']}
    ]
}))*/

app.use('/user', users)
app.use('/course', courses)
app.use('/ratings', ratings)
app.use('/dashboard', dashboards)
app.use(errors.errorHandler); // middleware for error responses


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to mongo at ${uri}`));


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});