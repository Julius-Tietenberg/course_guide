const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const userServices = require('../services/UserServices.js')
const { authenticateToken } = require('../helpers/jwt')

router.post('/register', (req, res, next) => {
    const {password} = req.body
    const salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(password, salt);

    userServices.register(req.body).then( user => {
            res.status(200).json({ success: true})
        }
    ).catch(err => next(err))
})

router.post('/login', (req, res, next) => {
    const { username, password} = req.body;
    userServices.login({username, password}).then(user => {
            user ? res.json(user) : res.json({ error: 'Username or password is incorrect' });
        }
    ).catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    userServices.getById(req.params.id).then(
        (user) => res.json(user)
    ).catch(err => next(err))
})

router.get('/all/users', authenticateToken, (req, res, next) => {
    userServices.getAll().then(users => {
        res.send(users)
    }).catch(err => next(err))
})

router.get('/all/users_wc', (req, res, next) => {
    userServices.filter(req).then(users => {
        res.send({
            totalItems: users.totalDocs,
            users: users.docs,
            totalPages: users.totalPages,
            currentPage: users.page - 1,
        });
        }
    ).catch(err => next(err))
})

module.exports = router;