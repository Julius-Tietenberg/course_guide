const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const CourseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: false,
    },
    catalog: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
    sws: {
        type: Number,
        required: false,
    },
    expected_participants: {
        type: Number,
        required: false,
    },
    max_participants: {
        type: Number,
        required: false,
    },
    credit: {
        type: Number,
        required: false,
    },
    language: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    times_manual: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    exam: {
        type: String,
        required: false,
    },
    prof_name: {
        type: String,
        required: false,
    }
});

CourseSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

CourseSchema.plugin(mongoosePaginate);

const Course =  mongoose.model("course", CourseSchema);

module.exports = Course;