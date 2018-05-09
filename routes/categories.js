const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers/categories');

router.get('/create', CategoriesController.category_create); // render the create category route

router.post('/', CategoriesController.category_post_category); // create a new category

module.exports = router;