const Student = require('../models/students');
const Staff = require('../models/staff');

module.exports.loadPage = (req, res) => {
    return res.render('addstudent', {
        title: 'Student | Add Student'
    });
};

module.exports.createUser = (req, res) => {
    (async () => {
        try{
            const staff = await Staff.findById(req.user._id);
            if(staff){
                await Student.create(req.body).then((student) => {
                    staff.students.push(student._id);
                    staff.save();
                });
            }
            return res.redirect('/staff/dashboard');
        }catch(err){
            console.log(`Error: ${err.message}`);
        }
    })();
};