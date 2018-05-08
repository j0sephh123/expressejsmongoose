const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');
app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/bookapp')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());




app.get('/', (req, res) => {
  res.render('home', {data: 'some data'});
});

app.post('/', (req, res) => {
  res.render('home', {data: req.body.bookName})
});



app.listen(5000, () => console.log('The Application has started. Port: {5000}'));