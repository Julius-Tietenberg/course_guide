const User = require('../models/UserModel')
const bcrypt = require('bcryptjs');
const auth = require('../helpers/jwt.js')
const { getPagination } = require('../helpers/own_pagination')

async function login({ username, password }) {
    const user = await User.findOne({username});

    // synchronously compare user entered password with hashed password
    if(user && bcrypt.compareSync(password, user.password)){
        const token = auth.generateAccessToken(username);

        // call toJSON method applied during model instantiation
        return {...user.toJSON(), token}
    }
}

async function register(params) {
    const user = new User(params)
    await user.save();
}

async function getById(id) {

    const user = await User.findById(id);
    // call toJSON method applied during model instantiation
    return user.toJSON()
}

async function getByUsername(req) {
    const username = req.user["data"];
    const user = await User.findOne({username});
    return user.toJSON();
}

async function updateUser(req) {
    const username = req.user["data"];
    const params = req.body;
    const user = await User.findOneAndUpdate(
        {username},
        {...params},
        { new: true, useFindAndModify: false }
    );
    return user;
}

async function getAll() {
    const users = await User.find({});
    return users;
}

async function filter(req) {
    const { page, size, username } = req.query;
    const condition = username
        ? { username: { $regex: new RegExp(username), $options: "i" } }
        : {};

    const { limit, offset } = getPagination(page, size);
    return await User.paginate(condition, { offset, limit });
}

module.exports = {
    login,
    register,
    getById,
    getByUsername,
    updateUser,
    getAll,
    filter
};