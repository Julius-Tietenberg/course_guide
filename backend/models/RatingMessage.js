const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const RatingMessageSchema = new Schema({
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
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
        type: Number,
        required: true,
    }
});

RatingMessageSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

RatingMessageSchema.plugin(mongoosePaginate);

const RatingMessage =  mongoose.model("rating_message", RatingMessageSchema);

module.exports = RatingMessage;