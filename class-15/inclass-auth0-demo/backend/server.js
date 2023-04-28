'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/bookModel');
const verifyUser = require('./auth');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;
mongoose.connect(process.env.MONGO_URL)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async _ => {
  console.log('We\'re connected!');
});

app.get('/test', (request, response) => {
  response.send('test request received')
})

app.use(verifyUser);

app.get('/books', handleGetBooks);
app.post('/books', handlePostBooks);
app.delete('/books/:id', handleDeleteBooks);
app.put('/books/:id', handlePutBooks);


async function handleGetBooks(req, res) {
  /// 
  try {
    const booksFromDb = await Book.find({ email: req.user.email });
     res.status(200).send(booksFromDb);
    } catch (e) {
    console.error(e);
    res.status(500).send('server error');
  }
}


async function handlePostBooks(req, res) {
  try {
    console.log(req.user.email);
    const newBook = await Book.create({...req.body, email: req.user.email})
    res.status(200).send(newBook);
  } catch (e) {
    res.status(500).send('server error');
  }
}

async function handleDeleteBooks(req, res) {
  const { id } = req.params;

  try {
    await Book.findByIdAndDelete(id);
    res.status(200).send('deleted!')
  } catch (e) {
    res.status(500).send('server error');
  }
}

async function handlePutBooks(req, res) {
  const { id } = req.params;
  try {
      const updatedBook = await Book.findByIdAndUpdate(id, { ...req.body, email: req.user.email }, { new: true, overwrite: true });
      res.status(200).send(updatedBook);
  } catch (e) {
    res.status(500).send('server error');
  }
}


app.listen(PORT, () => console.log(`listening on ${PORT}`));