const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin');

router.get('/', AdminController.admin); // admin page

 

module.exports = router;