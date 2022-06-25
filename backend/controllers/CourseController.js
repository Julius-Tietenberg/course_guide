const express = require('express')
const router = express.Router();
const courseServices = require('../services/CourseService.js')
const { getDocs } = require('../helpers/own_pagination')

/*const load_courses = require('../data/courses.json')
const { transform_elas } = require('../helpers/transfrom_courses_from_elas')*/

router.post('/add', (req, res, next) => {
    courseServices.add(req.body).then(user => {
            res.json(user)
        }
    ).catch(err => next(err))
})

router.post('/add_all', (req, res, next) => {
    // const courses =  load_courses; // transform_elas(load_courses);
    const courses = req.body;
    courseServices.addAll(courses).then(courses => {
            res.send({status: true})
        }
    ).catch(err => next(err))
})

router.get('/filter', (req, res, next) => {
    courseServices.filter(req).then(courses => {
            res.send(getDocs(courses));
        }
    ).catch(err => next(err))
})

module.exports = router;