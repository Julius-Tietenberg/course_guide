const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');
const {ObjectId} = require("mongodb");

const RatingCourseSchema = new Schema({
    id_course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course',
    },
    id_message: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rating_message',
    },
    created_at: {
        type: Date,
        default: Date.now(),
    }
});

RatingCourseSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

RatingCourseSchema.plugin(mongoosePaginate);

const RatingCourse =  mongoose.model("rating_course", RatingCourseSchema);

module.exports = RatingCourse;