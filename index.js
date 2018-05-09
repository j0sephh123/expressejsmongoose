const express = require('express');
const methodOverride = require('method-override');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const ejs = require('ejs');
const Book = require('./models/Book');
const bookRoutes = require('./routes/books');
const adminRoutes = require('./routes/admin');
const categoriesRoutes = require('./routes/categories');

app.set('view engine', 'ejs');




mongoose.connect('mongodb://localhost/bookapp');


app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use('/books', bookRoutes);
app.use('/admin', adminRoutes);
app.use('/categories', categoriesRoutes);


app.get('/', (req, res) => {
  res.redirect('/books');
});




app.listen(5000, () => console.log('The Application has started. Port: {5000}'));
