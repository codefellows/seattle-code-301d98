const mongoose = require('mongoose');
require('dotenv').config();

const Book = require('./models/bookModel.js');

async function seed() {
  mongoose.connect(process.env.MONGO_URL);

  await Book.create({
    title:  'Book 1',
    description: 'YAY A BOOK!',
    status: 'read',
    email: 'audrey@codefellows.com'
  });

  console.log('saved book 1');


  await Book.create({
    title:  'Book 2',
    description: 'YAY Another BOOK!',
    status: 'read',
    email: 'audrey@codefellows.com'
  });

  console.log('saved book 2');


  await Book.create({
    title:  'Book 3',
    description: 'AGAIN ANOTHER BOOK!',
    status: 'read',
    email: 'audrey@codefellows.com'
  });

  await Book.create({
    title:  'Personal email',
    description: 'AGAIN ANOTHER BOOK!',
    status: 'read',
    email: 'audrey.patterson31@gmail.com'
  });

  await Book.create({
    title:  'Personal Book #2',
    description: 'I rarely read!',
    status: 'read',
    email: 'audrey.patterson31@gmail.com'
  });

  console.log('saved book 3');
  mongoose.disconnect();
}

seed();