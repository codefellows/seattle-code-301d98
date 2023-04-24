'use strict';

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// *** BRING IN MONGOOSE ***
const mongoose = require('mongoose');

// **** BRING IN MODEL TO SERVER FOR ENDPOINTS ****
const Cat = require('./models/cat');

const app = express();

// middleware
app.use(cors());


// define PORT validate env is working
const PORT = process.env.PORT || 3002;

// LISTEN
app.listen(PORT, () => console.log(`listening on Port ${PORT}`));

// *** CONNECT MONGOOSE TO MONGODB AND BRING IT INTO MY SERVER ***
mongoose.connect(process.env.DB_URL);

// *** HELPFUL FOR YOU TO TROUBLESHOOT IN YOUR TERMINAL AS TO WHY YOU CAN'T CONNECT TO MONGODB ***
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

// ENDPOINTS
app.get('/', (request, response) => {
  response.status(200).send('Welcome!');
});

// *** ENDPOINT THAT WILL RETRIEVE ALL CATS FROM THE DB ****

app.get('/cats', async (request, response, next) => {
  try {
    // TODO: GET ALL CATS FROM DB AND SEND IT ON THE RESPONSE
    let allCats = await Cat.find({}); // Model.find({}) -> return all documents from the DB

    response.status(200).send(allCats);
  } catch (error) {
    next(error);
  }
});

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

// ERROR
app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});


