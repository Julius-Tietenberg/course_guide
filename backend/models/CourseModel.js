const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const CourseSchema = new Schema({});

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