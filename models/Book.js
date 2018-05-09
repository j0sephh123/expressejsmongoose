const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  id: Schema.Types.ObjectId,
  bookName: {type: Schema.Types.String, required: true},
  price: {type: Schema.Types.Number, required: false},
  quantity: {type: Schema.Types.Number, required: false},

  category: {type: Schema.Types.ObjectId, ref: 'Category', required: true},


});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;