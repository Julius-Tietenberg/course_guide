const express = require('express')
const router = express.Router();
const { user } = require('../models/user');
const bcrypt = require("bcryptjs");
const userServices = require("../old_2/services/UserServices");

router.post('/register', (req, res, next) => {
    const {password} = req.body
    const salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(password, salt);

    userServices.register(req.body).then(
        res.json({success:true})
    ).catch(err => next(err))
})