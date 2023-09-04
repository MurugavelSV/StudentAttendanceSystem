const Hod = require('../models/hod');

module.exports.loadSignin = (req, res) => {
    return res.render('hodsignup', {
        title: 'HOD | Sign-in'
    });
};

module.exports.createUser = (req, res) => {
    (async () => {
        await Hod.create(req.body).then((user) => {
            console.log(user);
            return res.redirect('/hod');
        }).catch((err) => {
            console.log(`Error: ${err.message}`);
        });
    })();
}