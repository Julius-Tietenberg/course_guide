const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');
const {ObjectId} = require("mongodb");

const FileSchema = new Schema({
    created_by: {
        type: ObjectId,
        required: false,
    },
    contentType: {
        type: String,
        required: false,
    },
    contentSize: {
        type: Number,
        required: false,
    },
    data: {
        type: Buffer,
        required: false,
    }
});

FileSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

FileSchema.plugin(mongoosePaginate);

const File =  mongoose.model("file", FileSchema);

module.exports = File;