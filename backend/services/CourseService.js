const Course = require('../models/CourseModel')
const { getPagination } = require('../helpers/own_pagination')

async function add(course) {
    await Course.collection.insertOne(course);
}

async function update(course) {
    const res = await Course.updateOne(course);
    return res.acknowledged;
}

async function findById(id) {
    const course = await Course.findById(id);
    return course.toJSON();
}

async function addAll(courses) {
    await Course.collection.insertMany(courses);
}

async function search(req) {
    const { page, size, course_name, prof_name, sort } = req.query;
    let query = {}
    let options = {};

    if (course_name) {
        query.name = { $regex: new RegExp(course_name), $options: "i" }
    }
    if (prof_name) {
        query.persons = { $elemMatch: { name: { $regex: new RegExp(prof_name), $options: "i" } } }
    }

    query = (query.name !== undefined) || (query.persons !== undefined)
        ? query : {}


    if (sort) {
        options.sort = sort == "asc" ? {"rating": 1} : {"rating": -1}
    }

    const { limit, offset } = getPagination(page, size);
    return await Course.paginate(query, { offset, limit, options });
}


module.exports = {
    add,
    update,
    findById,
    addAll,
    search
};