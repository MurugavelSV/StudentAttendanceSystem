const Staff = require('../models/staff');

module.exports.loadPage = (req, res) => {
    (async () => {
        // if(req.isAuthenticated()){
            return res.render('staff', {
                title: "Staff | Dashboard"
            });
        // }else{
        //     return res.render('/staff/login');
        // }
    })();
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

module.exports.displayProfile = (req, res) => {
    async () => {
        
    }
}

module.exports.createUser = (req, res) => {
    (async () => {
        await Staff.create(req.body).then((user) => {
            return res.redirect('/staff/login');
        }).catch((err) => {
            console.log(`Error: ${err.message}`);
        });
    })();
};

module.exports.createSession = (req, res) => {
    return res.redirect('/');
};

module.exports.destroySession = (req, res) => {
    req.logout((err) => {
        if(err){
            console.log(`Error: ${err.message}`);
        }
        return res.redirect('/staff/login');
    })
}