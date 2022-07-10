const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const RatingCourseSchema = new Schema({
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    message_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    created_at: {
        type: Date,
        // default: Date.now(),
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