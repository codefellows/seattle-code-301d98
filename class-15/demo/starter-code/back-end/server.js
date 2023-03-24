'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/bookModel');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_URL)

app.get('/test', (request, response) => {
  response.send('test request received')
})

app.get('/books', handleGetBooks);
app.post('/books', handlePostBooks);
app.delete('/books/:id', handleDeleteBooks);
app.put('/books/:id', handlePutBooks)

async function handleGetBooks(req, res) {
  const searchObject = {}
  if (req.query.email) {
    searchObject.email = req.query.email;
  }
  try {
    const booksFromDb = await Book.find(searchObject);
    if (booksFromDb.length > 0) {
      res.status(200).send(booksFromDb);
    } else {
      res.status(404).send('error');
    }
  } catch (e) {
    console.error(e);
    res.status(500).send('server error');
  }
}


async function handlePostBooks(req, res) {
  const { email } = req.query;
  const { title, description, status } = req.body;
  try {
    const newBook = await Book.create({ ...req.body, email })
    res.status(200).send(newBook)
  } catch (e) {
    res.status(500).send('server error');
  }
}

async function handleDeleteBooks(req, res) {
  const { id } = req.params;
  const { email } = req.query;

  try {
    const book = await Book.findOne({ _id: id, email });
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
  const { email } = req.query;
  try {
    const book = await Book.findOne({ _id: id, email });
    if (!book) res.status(400).send('unable to update book');
    else {
      const updatedBook = await Book.findByIdAndUpdate(id, { ...req.body, email }, { new: true, overwrite: true });
      res.status(200).send(updatedBook);
    }
  } catch (e) {
    res.status(500).send('server error');
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
