const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/roles_controller');

router.get('/roles', rolesController.loadRoles);

module.exports = router;