const mongoose = require('mongoose');
const Book = require('../models/Book');

exports.books_get_books = (req, res) => {
  let data = Book.find({})
    .then(book => res.render('home', {book}))
    .catch(error => res.send('error'));
} // get all books

exports.books_post_book = (req, res) => {
  let bookName = req.body.bookName;
  const book = new Book({bookName})
    .save()
    .then(result => console.log(result))
    .catch(err => res.send(err));
  res.redirect('/books');
} // create a book 

exports.books_show_book  = (req, res) => {
  const id = req.params.id;
  let oneBook = Book.findById(id)
    .select('bookName _id')
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