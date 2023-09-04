const Student = require('../models/students');

module.exports.loadPage = (req, res) => {
    return res.render('addstudent', {
        title: 'Student | Add Student'
    });
};