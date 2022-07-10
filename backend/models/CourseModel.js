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
    },
    fullDescription: {
        type: { description: String, targets: String,
                literature: String, preQualification: String,
                infoLink: String, notice: String
        },
        required: false,
    },
    rating: {
        type: Number,
        required: false,
    },
    stars: {
        type: {teacher: Number, learning: Number, workload: Number, difficulty: Number},
        required: true,
    }
    // rating_messages: [{ type: Schema.Types.ObjectId, ref:'rating_message' }],
});

CourseSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v

        delete returnedObject.parent_id
        delete returnedObject.root_id

        kws = returnedObject.keywords
        keywords = [];
        for (let i in kws) {
            keywords.push(kws[i].text);
        }
        returnedObject.keywords = keywords;

        times = returnedObject.timetable
        timetable = [];
        for (let i in times) {
            timetable.push({
                day: times[i].day,
                interval: `${times[i].time.from} - ${times[i].time.to}`
            });
        }
        returnedObject.timetable = timetable;

        delete returnedObject.stars._id;
    }
})

CourseSchema.plugin(mongoosePaginate);

const Course =  mongoose.model("course", CourseSchema);

module.exports = Course;