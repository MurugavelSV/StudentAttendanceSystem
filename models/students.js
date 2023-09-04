const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    admissionno: {
        type: Number,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    city: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;