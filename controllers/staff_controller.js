const Staff = require('../models/staff');

module.exports.loadPage = (req, res) => {
    return res.render('staff', {
        title: "Staff | Dashboard"
    });
};

module.exports.loadSignup = (req, res) => {
    return res.render('staffsignup', {
        title: "Staff | Sign-up"
    });
};

module.exports.loadLogin = (req, res) => {
    return res.render('stafflogin', {
        title: "Staff | Sign-in"
    });
};

module.exports.createUser = (req, res) => {
    (async () => {
        await Staff.create(req.body).then((user) => {
            return res.redirect('/staff/dashboard');
        }).catch((err) => {
            console.log(`Error: ${err.message}`);
        });
    })();
};