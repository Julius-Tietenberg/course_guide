const DashboardCourse = require('../models/DashboardCourseModel')
const { getPagination } = require('../helpers/own_pagination')
const User = require("../models/UserModel");
const {ObjectId} = require("mongodb");
const Course = require("../models/CourseModel");

async function addToMyCourse(req) {
    const username = req.user["data"];
    let user = await User.findOne({username});

    const { course_id } = req.query;

    await DashboardCourse.collection.insertOne({
        user_id: ObjectId(user['_id']),
        course_id : ObjectId(course_id)
    });

    return {message: true}
}

async function get_my_course(req) {
    const username = req.user["data"];
    const { page, size } = req.query;

    let user = await User.findOne({username});
    const { limit, offset } = getPagination(page, size);

    const query = {user_id: user._id}
    let dc = await DashboardCourse.paginate(query, { offset, limit })

    let courses = [];
    for (let myc of dc.docs) {
        let course = await Course.findOne({
            _id: myc.course_id
        });
        course = JSON.parse(JSON.stringify(course));
        delete course.rating_messages;
        courses.push(course);
    }

    courses.sort((a, b) => b.rating - a.rating);

    return {
        totalItems: dc.totalDocs,
        content: courses,
        totalPages: dc.totalPages,
        currentPage: dc.page - 1,
    }
}


module.exports = {
    addToMyCourse,
    get_my_course,
};