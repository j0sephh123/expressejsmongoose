const mongoose = require('mongoose');
const Book = require('../models/Book');
const Category = require('../models/Category');

exports.books_get_books = (req, res) => {
  Book.find()
    .populate("category", "categoryName")
    .exec()
    .then(book => res.render('home', {book}))
    .catch(error => res.send('error'));
} // get all books

exports.books_create = (req, res) => {
  Category.find({})
    .then(category => res.render('create', {category}))
    .catch(err => res.send(err));
} // just show a form to create a book nothing more

exports.books_post_book = (req, res) => {
  Category.findOne({categoryName: req.body.categoryName})
    .then(result => {
      
      let bookName = req.body.bookName;
      let price = req.body.price;
      let quantity = req.body.quantity;

      const book = new Book({bookName, price, quantity, category: result._id})
        .save()
        .then(result => {
          
          res.redirect('/books');
        })  
    })
    .catch(err => res.send(err));
} // create a book 

exports.books_show_book  = (req, res) => {
  const id = req.params.id;
  let oneBook = Book.findById(id)
    .select()
    .exec()
    .then(book => {
      console.log(book);
      res.render('show', {book})
    })
    .catch(err => console.log(err));
} // show only one book;

exports.books_delete_book = (req, res) => {
  const id = req.params.id;
  Book.remove({_id: id})
    .exec()
    .then(result => {
      console.log(result);
      res.redirect('/books');
    })
    .catch(err => console.log(err));
} // delete a book

exports.books_get_edit_book = (req, res) => {
  const id = req.params.id;
  let oneBook = Book.findById(id)
    .select()
    .exec()
    .then(book => {
      console.log(book);
      res.render('edit', {book})
    })
    .catch(err => console.log(err));
} // go to edit route

exports.books_update_book = (req, res) => {
  const id = req.params.id;
  const updateOps = {};

  for (const ops in req.body) {
    updateOps[ops] = req.body[ops];
  }
  Book.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.redirect('/books');
    })
    .catch(err => console.log(err));
} // update








