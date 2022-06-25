const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const CourseSchema = new Schema({
    url: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    id: {
        type: String,
        required: false,
    },
    parent_id: {
        type: [ { Number: String } ],
        required: false,
    },
    root_id: {
        type: [ { Number: String } ],
        required: false,
    },
    subject_type: {
        type: String,
        required: false,
    },
    semester: {
        type: String,
        required: false,
    },
    sws: {
        type: String,
        required: false,
    },
    longtext: {
        type: String,
        required: false,
    },
    shorttext: {
        type: String,
        required: false,
    },
    language: {
        type: String,
        required: false,
    },
    hyperlink: {
        type: String,
        required: false,
    },
    timetable: {
        type: Array,
        required: false,
    },
    /*persons: {
        type: [ { Number: {id: String, name: String, url: String} } ],
        required: false,
    },*/
    persons: {
        type: [ {id: String, name: String, url: String} ],
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    /*keywords: {
        type: [{Number: {text: String, value: String}}],
        required: false,
    }*/
    keywords: {
        type: [ {text: String, value: String} ],
        required: false,
    }
});

CourseSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v

        delete returnedObject.parent_id
    }
})

CourseSchema.plugin(mongoosePaginate);

const Course =  mongoose.model("course", CourseSchema);

module.exports = Course;