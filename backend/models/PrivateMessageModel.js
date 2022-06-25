const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const PrivateMessageSchema = new Schema({
    id_private_contact: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'private_contact',
    },
    content: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    }
});

PrivateMessageSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

PrivateMessageSchema.plugin(mongoosePaginate);

const PrivateMessage =  mongoose.model("private_message", PrivateMessageSchema);

module.exports = PrivateMessage;