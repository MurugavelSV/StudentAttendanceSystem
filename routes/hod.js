const express = require('express');
const router = express.Router();
const hodController = require('../controllers/hod_controller');

router.get('/sign-up', hodController.loadSignin);
router.post('/create', hodController.createUser);

module.exports = router;