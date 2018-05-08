const express = require('express');
const router = express.Router();
const BooksController = require('../controllers/books');

router.get('/', BooksController.books_get_books); // get all books

router.get('/create', BooksController.books_create); // create

router.post('/', BooksController.books_post_book); // create a book for now

router.get('/:id', BooksController.books_show_book); // show only one book.

router.delete('/:id', BooksController.books_delete_book); // delete a book;

router.get('/:id/edit', BooksController.books_get_edit_book) // show edit form 

router.put('/:id', BooksController.books_update_book); // update book 

module.exports = router;