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

// ! DON'T FORGET TO BRING THIS IN!!!! -- body parser allows us to read the request.body
app.use(express.json());

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


// *** ENDPOINT TO ADD A CAT TO THE DATABASE ***

app.post('/cats', postCat);

async function postCat(request, response, next){
  // console.log(request.body);
  try {
    // TODO: take in the data that comes in on the request
    let catData = request.body;

    // TODO: have my Model create the new instance of a cat to my DB
    // !! DON'T FORGET THAT MIDDLEWARE ^ ^ ^ ^ (LINE 20)
    let createdCat = await Cat.create(catData);

    // TODO: send that on the response
    response.status(200).send(createdCat);
  } catch (error) {
    next(error);
  }
}

// *** ENDPOINT TO DELETE A CAT ***
// ! we must have path parameter
// ! path parameter is going to be set with a variable to capture the ID
// ! we use ':' to signify that it is a path parameter

app.delete('/cats/:catID', deleteCat);

async function deleteCat (request, response, next){
  try {
    // console.log(request.params);

    let id = request.params.catID;

    await Cat.findByIdAndDelete(id);

    response.status(200).send('Cat deleted!');
  } catch (error) {
    next(error);
  }
}

// *** ENDPOINT TO UPDATE A CAT ***
app.put('/cats/:catID', updateCat);

async function updateCat(request, response, next){
  try {
    // TODO: Grab the id from the request.params and data from the request.body
    let id = request.params.catID;
    let catData = request.body;

    // TODO: use the Model method of findByIdAndUpdate and pass in the id, data, options object
    // ! 3 args
    // ! id, data, options object -> { new: true, overwrite: true }

    let updatedCat = await Cat.findByIdAndUpdate(id, catData, { new: true, overwrite: true });

    // TODO: send on the response, the updated cat
    response.status(200).send(updatedCat);

  } catch (error) {
    next(error);
  }
}

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

// ERROR
app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});


