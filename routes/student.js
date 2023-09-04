const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student_controller');

router.get('/addpage', studentController.loadPage);

module.exports = router;