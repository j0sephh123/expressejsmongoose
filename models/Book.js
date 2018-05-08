const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  id: Schema.Types.ObjectId,
  bookName: {type: Schema.Types.String, required: true},
  pages: {type: Schema.Types.Number, required: false},
  author: {type: Schema.Types.String, required: false},
  read: {type: Schema.Types.Boolean, required: false},
  published: {type: Schema.Types.Number, required: false},
  comments: Schema.Types.Array
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;