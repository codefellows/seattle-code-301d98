'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

app.listen(PORT, ()=> console.log(`Yay we are up on port ${PORT}`));

app.get('/', (request, response)=>{
  response.status(200).send('Welcome to my server!');
});


// *** HELPFUL FOR LAB ****

// *** WEATHER BIT DOCS : https://www.weatherbit.io/api/weather-forecast-16-day
// *** WEATHER API URL FOR ENDPOINT - http://api.weatherbit.io/v2.0/forecast/daily?key=<YOUR API KEY>&lat=<LAT FROM FRONTEND>&lon=<LON FROM FRONTEND>


// **** MOVIES ****
// *** MOVIE DB DOCS :  https://developers.themoviedb.org/3/search/search-movies
// *** MOVIE API URL FOR ENDPOINT - https://api.themoviedb.org/3/search/movie?api_key=<your MOVIE DB KEY>&query=<city info from frontend>
// *** images: https://image.tmdb.org/t/p/w500/<poster path>
// *** in your class  -> this.image = `https://image.tmdb.org/t/p/w500${movieObj.poster_path}`

// TODO: BULID AN ENDPOINT THAT WILL CALL OUT TO AN API
app.get('/photos', async (request, response, next) => {
  try {
    // DONE: accept or define my queries -> /photos?city=VALUE
    let myLocalCity = request.query.city;

    // DONE: build out my url to pass to axios -> require axios at the top // npm install axios
    let url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${myLocalCity}`;

    // DONE: Store my axios data in a variable
    let photosFromAxios = await axios.get(url);

    // DONE: take that result from axios and groom it with my class
    // NOTE: photosFromAxios.data.results.map -> obj -> to my class
    let dataToSend = photosFromAxios.data.results.map(obj => new Photo(obj));

    // DONE: groomed data and send it in the response
    response.status(200).send(dataToSend);
  } catch (error) {
    next(error);
  }
});

// TODO: DEFINE MY PHOTO CLASS and info I want to send to the front end
class Photo {
  constructor(picObj){
    this.src = picObj.urls.regular;
    this.alt = picObj.alt_description;
    this.username = picObj.user.name;
  }
}



app.get('*', (request, response) => {
  response.status(404).send('This page does not exist');
});


// **** ERROR HANDLING - PLUG AND PLAY CODE FROM EXPRESS DOCS ****
app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});
