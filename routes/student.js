const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student_controller');

router.get('/addpage', studentController.loadPage);
router.post('/create', studentController.createUser);
router.post('/present/', studentController.markPresent);

module.exports = router;