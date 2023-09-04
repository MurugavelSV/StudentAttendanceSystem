const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Staff = require('../models/staff');

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, async (username, password, done) => {
    await Staff.findOne({
        username: username,
        password: password
    }).then((staff) => {
        if(!staff){
            console.log(`Error in finding user`);
            return done(null, false);
        }else{
            return done(null, staff);
        }
    }).catch((err) => {
        return done(err);
    });
}));

passport.serializeUser(async (staff, done) => {
    return done(null, staff._id);
});

passport.deserializeUser(async (id, done) => {
    try{
        const staff = await Staff.findById(id);
        if(staff){
            return done(null, staff);
        }else{
            return done(null, false);
        }
    }catch(err){
        return done(err);
    }
});

passport.checkAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }else{
        return res.redirect('/');
    }
};

passport.setAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        res.locals.staff = req.staff;
        console.log(res.locals.staff);
    }
    return next();
};

module.exports = passport;