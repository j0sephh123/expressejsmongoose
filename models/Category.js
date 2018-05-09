const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    id: Schema.Types.ObjectId,
    categoryName: { type: String, required: true },
});

const Category = mongoose.model('Category', categorySchema)

module.exports = Category;
