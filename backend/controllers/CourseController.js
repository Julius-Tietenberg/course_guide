const express = require('express')
const router = express.Router();
const courseServices = require('../services/CourseService.js')
const { getDocs } = require('../helpers/own_pagination')
const {ownStatusCode} = require("../helpers/own_status");

const load_courses = require('../data/courses.json')
const { transform_elas } = require('../helpers/transfrom_courses_from_elas')

router.post('/add', (req, res, next) => {
    courseServices.add(req.body).then(course => {
            res.json(course)
        }
    ).catch(err => next(err))
})

router.get('/course_detail', (req, res, next) => {
    const { id } = req.query;
    courseServices.findById(id).then(course => {
            res.json(course)
        }
    ).catch(err =>  res.status(ownStatusCode.internal_server_error)
                        .json({ error: "Couldn't find a course with this id " +  req.params.id })
    )
})

router.post('/add_all', (req, res, next) => {
    const courses =  transform_elas(load_courses);
    // const courses = req.body;
    courseServices.addAll(courses).then(courses => {
            res.send({status: true})
        }
    ).catch(err => next(err))
})

router.get('/search', (req, res, next) => {
    courseServices.search(req).then(courses => {
            res.send(getDocs(courses));
        }
    ).catch(err => next(err))
})

module.exports = router;