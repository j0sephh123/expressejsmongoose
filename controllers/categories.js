const mongoose = require('mongoose');
const Category = require('../models/Category');

exports.category_create = (req, res) => {
  res.render('create_category');
} // create a category

exports.category_post_category = (req, res) => {
  let categoryName = req.body.categoryName;
  const category = new Category({categoryName})
    .save()
    .then(result => {
      console.log(result);
      res.redirect('/books');
    })
    .catch(err => res.send(err));
  
}