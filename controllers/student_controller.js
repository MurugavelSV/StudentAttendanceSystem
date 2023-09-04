const Student = require('../models/student');
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
                    student.teacher = staff._id;
                    student.save();
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

module.exports.markPresent = (req, res) => {
    (async () => {
        try{
            const student = await Student.findById(req.params.id);
            student.daysattended = Number(student.daysattended) + 1;
            student.save();
            return res.redirect('/staff/dashboard');
        }catch(err){
            console.log(`Error: ${err.message}`);
        }
    })();
}