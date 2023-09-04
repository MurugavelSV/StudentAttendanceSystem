const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staff_controller');

router.get('/sign-up', staffController.loadSignup);
router.get('/login', staffController.loadLogin);
router.get('/dashboard', staffController.loadPage);
router.post('/create', staffController.createUser);

module.exports = router;