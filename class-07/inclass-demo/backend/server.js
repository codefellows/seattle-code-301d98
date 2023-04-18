'use strict';

// **** REQUIRE *** (like import but for the backend)

const express = require('express');
require('dotenv').config();
const cors = require('cors');
let petData = require('./data/data.json');

// *** app === server - Need to call Express to create the server
const app = express();

// *** MIDDLEWARE *** allow anyone to hit our server
app.use(cors());

const PORT = process.env.PORT || 3002;

app.listen(PORT, ()=> console.log(`Yay we are up on port ${PORT}`));

// **** ENDPOINTS ****
// *** 1st arg - endpoint url as a string
// *** 2nd arg - callback which will execute when that endpoint is hit
//              ** 2 parameters, request, response

app.get('/', (request, response)=>{
  response.status(200).send('Welcome to my server!');
});

app.get('/hello', (request, response)=>{
  let firstName = request.query.userFirstName;
  let lastName = request.query.userLastName;

  console.log(request.query);

  response.status(200).send(`Hello ${firstName} ${lastName}, welcome to my server!`);

});

app.get('/pet', (request, response, next)=>{

  try {
    let queriedSpecies = request.query.species;

    let foundPet = petData.find(pet => pet.species === queriedSpecies);
    let dataToSend = new Pet(foundPet);

    response.status(200).send(dataToSend);
  } catch (error) {
    next(error);
  }
});

// *** CLASS TO GROOM BULKY DATA ***
class Pet {
  constructor(petObj){
    this.name = petObj.name;
    this.breed = petObj.breed;
  }
}


// *** HELPFUL START FOR YOUR LAB ***
app.get('/weather', (request,response,next)=>{

  try {
    let lat = request.query.lat;
    let lon = request.query.lon;
    let searchQuery = request.query.searchQuery;

    // finish this portion using the weather.json file and your class you will build...

  } catch (error) {
    console.log(error.message);
    next(error.message);
  }
});



// *** CATCH ALL ENDPOINT SHOULD BE THE LAST DEFINED ***
app.get('*', (request, response) => {
  response.status(404).send('This page does not exist');
});


// **** ERROR HANDLING - PLUG AND PLAY CODE FROM EXPRESS DOCS ****
app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});
