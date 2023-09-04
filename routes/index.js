const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.loadHome);
router.use('/roles', require('./roles'));

module.exports = router;
