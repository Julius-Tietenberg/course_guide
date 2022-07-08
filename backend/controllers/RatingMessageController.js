const express = require('express')
const router = express.Router();
const ratingMessageService = require("../services/RatingMessageService");
const { getDocs } = require('../helpers/own_pagination')
const {ownStatusCode} = require("../helpers/own_status");
const {authenticateToken} = require("../helpers/jwt");

router.post('/add', authenticateToken, (req, res, next) => {
    ratingMessageService.add(req, res).then(course => {
            res.json(course)
        }
    ).catch(err => next(err))
})


router.get('/ratings_by_ic_course', authenticateToken, (req, res, next) => {
    ratingMessageService.findAllByIdCourse(req).then(ratingMessage => {
            res.send(ratingMessage);
        }
    ).catch(err => next(err))
})

module.exports = router;