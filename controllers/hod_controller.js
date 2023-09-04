module.exports.loadSignin = (req, res) => {
    return res.render('hodsignin', {
        title: 'HOD | Sign-in'
    });
};