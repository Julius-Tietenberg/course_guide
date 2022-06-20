const Course = require('../models/CourseModel')
const { getPagination } = require('../helpers/own_pagination')

async function add(course) {
    await Course.collection.insertOne(course);
}

async function addAll(courses) {
    await Course.collection.insertMany(courses);
}

async function filter(req) {
    const { page, size, title, prof_name } = req.query;
    let query = {}

    if (title) {
        query.name = { $regex: new RegExp(title), $options: "i" }
    }
    if (prof_name) {
        // query.prof_name = { $regex: new RegExp(prof_name), $options: "i" }
        query.persons = { $elemMatch: { name: { $regex: new RegExp(prof_name), $options: "i" } } }
    }

    console.log(JSON.stringify(query))

    query = (query.title !== undefined) || (query.prof_name !== undefined)
        ? query : {}

    const options = {
        // select: ('title', 'prof_name', 'description'),
        sort: ({'score' : -1}) // ({ title: -1, prof_name: -1 })
    };

    const { limit, offset } = getPagination(page, size);
    return await Course.paginate(query, { offset, limit, options });
}

module.exports = {
    add,
    addAll,
    filter
};