'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/bookModel');
const verifyUser = require('./auth/authorize.js');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_URL)

// This will run the "verify" code on every route automatically
// If the user is valid, we'll have them in request.user in every route!
// If not, it'll throw an error for us
app.use(verifyUser);

app.get('/test', (request, response) => {
  response.send('test request received')
})

app.get('/books', handleGetBooks);
app.post('/books', handlePostBooks);
app.delete('/books/:id', handleDeleteBooks);
app.put('/books/:id', handlePutBooks);
app.get('/user', handleGetUser);

async function handleGetBooks(req, res) {
  try {
    const books = await Book.find({ email: req.user.email });
    res.send(books);
  } catch (error) {
    console.error(error);
    res.status(400).send('Could not find books');
  }
}

async function handlePostBooks(req, res) {
  const { title, description, status } = req.body;
  try {
    const newBook = await Book.create({ ...req.body, email: req.user.email })
    res.status(200).send(newBook)
  } catch (e) {
    res.status(500).send('server error');
  }
}

async function handleDeleteBooks(req, res) {

  const { id } = req.params;
  try {
    const book = await Book.findOne({ _id: id, email:req.user.email });
    if (!book) res.status(400).send('unable to delete book');
    else {
      await Book.findByIdAndDelete(id);
      res.status(204).send('bye book');
    }
  } catch (e) {
    res.status(500).send('server error');
  }
}

async function handlePutBooks(req, res) {
  const { id } = req.params;
  try {
    const book = await Book.findOne({ _id: id, email: req.user.email });
    if (!book) res.status(400).send('unable to update book');
    else {
      const updatedBook = await Book.findByIdAndUpdate(id, { ...req.body, email: req.user.email }, { new: true, overwrite: true });
      res.status(200).send(updatedBook);
    }
  } catch (e) {
    res.status(500).send('server error');
  }
}

function handleGetUser(req, res) {
  console.log('Getting the user');
  res.send(req.user);
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
