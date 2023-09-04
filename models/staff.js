const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 5
    },
    email: {
        type: String,
        require: true,
        minLength: 6
    },
    userid: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;