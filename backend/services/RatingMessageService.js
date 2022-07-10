const RatingMessage = require('../models/RatingMessage')
const { getPagination } = require('../helpers/own_pagination')
const {ObjectId} = require("mongodb");
const {ownStatusCode} = require("../helpers/own_status");
const User = require("../models/UserModel");
const mongoose = require("mongoose");
const courseServices = require('../services/CourseService.js')
const { getAvgStars } = require('../helpers/rating_helper')
const Course = require('../models/CourseModel')



async function add(req, res) {
    // https://kb.objectrocket.com/mongo-db/how-to-do-a-one-to-many-join-using-mongoose-229

    const username = req.user["data"];
    const {id_course} = req.query;

    if (id_course !== null && id_course !== undefined) {
        const body = req.body;

        let user = await User.findOne({username});
        body["id_user"] = ObjectId(user['_id']);
        body['created_at'] = Date.now();

        const rm = await RatingMessage.collection.insertOne(body);

        // add new rating value to the courses
        const course = await courseServices.findById(id_course);
        const avgR = getAvgStars(body.stars, course.stars, course.rating);
        // const allRatingValue = course.rating != undefined || course.rating != null ? course.rating : 0;

        await Course.findOneAndUpdate(
            {_id: ObjectId(id_course)},
            { $push: { rating_messages: rm.insertedId }, rating: avgR.total_rating, stars: avgR.stars },
            { new: true, useFindAndModify: false }
        )

        return {message: rm.acknowledged};
    }

    return res.status(ownStatusCode.not_acceptable).send({message: "Id Course is needed"})

}

async function findAllByIdCourse(req) {
    const { page, size, id_course } = req.query;

    const query = {
        _id: ObjectId(id_course)
    }

    const option = {
        // select: 'name follower',
        pagingOptions: {
            populate: {
                path: 'rating_messages',
                // sort: {created_at: -1},
            },
            page: page,
            limit: size,
        },

        /*populate: "rating_messages",
        page: page,
        limit: size,*/
    };

    const skips = page * (size - 1)

    let cm = await Course.findOne(query)
                .populate({
                path: 'rating_messages', sort: {created_at: -1}
            })

    let mgs = [];
    for (let rm of cm.rating_messages) {
        let final = rm;
        const user = await User.findById(rm['id_user']);
        final = JSON.parse(JSON.stringify(final));
        final['username'] = user.username;
        delete final.id_user;
        mgs.push(final);
    }
    mgs.reverse();
    cm = JSON.parse(JSON.stringify(cm))
    cm["rating_messages"] = mgs;

    //const cm = await Course.paginateSubDocs(query, option);
    return cm;
}


/*async function add2(req, res) {
    const username = req.user["data"];
    const {id_course} = req.query;
    if (id_course !== null && id_course !== undefined) {
        const body = req.body;

        let user = await User.findOne({username});
        body["id_user"] = ObjectId(user['_id']);

        const ratingMessage = await RatingMessage.collection.insertOne(body)

        // save ratingcourse
        const id_message = ObjectId(ratingMessage['insertedId:']);
        await RatingCourse.collection.insertOne({"id_course": ObjectId(id_course), "id_message": id_message});

        // add new rating value to the courses
        const course = await courseServices.findById(id_course)
        const allRatingValue = course.rating != undefined || course.rating != null ? course.rating : 0;
        await courseServices.update({rating: getAvgStars(body.stars, allRatingValue) });

        return {message: ratingMessage.acknowledged};
    }

    return res.status(ownStatusCode.not_acceptable).send({message: "Id Course is needed"})

}*/

module.exports = {
    add,
    findAllByIdCourse,
};