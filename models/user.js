const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    googleID: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    image: {
        type: String
    }
})


module.exports = mongoose.model('User',User);