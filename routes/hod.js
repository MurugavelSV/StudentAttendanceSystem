const express = require('express');
const router = express.Router();
const hodController = require('../controllers/hod_controller');

router.get('/signin', hodController.loadSignin);

module.exports = router;