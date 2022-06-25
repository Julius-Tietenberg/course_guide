const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const PrivateContactSchema = new Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    created_at: {
        type: Date,
        default: Date.now(),
    }
});

PrivateContactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

PrivateContactSchema.plugin(mongoosePaginate);

const PrivateContact =  mongoose.model("private_contact", PrivateContactSchema);

module.exports = PrivateContact;