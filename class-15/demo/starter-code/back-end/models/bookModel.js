'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  description: String,
  status: String,
  email: String
});
// Schema defines the shape of the data

const Book = mongoose.model('Book', bookSchema);
// model is a function that creates a new 'model' with a title that has certain methods available to it

module.exports = Book;