const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const RatingMessageSchema = new Schema({
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
    stars: {
        type: {teacher: Number, learning: Number, workload: Number, difficulty: Number},
        required: true,
    },
});

RatingMessageSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v

        const stars = returnedObject.stars;
        returnedObject['avg'] = (stars.teacher != null ? stars.teacher : 0)     +
                                (stars.learning != null ? stars.learning : 0)   +
                                (stars.workload != null ? stars.workload : 0)   +
                                (stars.difficulty != null ? stars.difficulty : 0)
    }
})

RatingMessageSchema.plugin(mongoosePaginate);

const RatingMessage =  mongoose.model("rating_message", RatingMessageSchema);

module.exports = RatingMessage;