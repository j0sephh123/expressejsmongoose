const express = require('express');
const methodOverride = require('method-override');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');
const Book = require('./models/Book');
const bookRoutes = require('./routes/books');

app.set('view engine', 'ejs');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/bookapp');

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use('/books', bookRoutes);


app.get('/', (req, res) => {
  res.redirect('/books');
});




app.listen(5000, () => console.log('The Application has started. Port: {5000}'));
