'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

const PORT = process.env.PORT;

app.get('/photos', getPhotos);

async function getPhotos(request, response) {
  const searchQuery = request.query.searchQuery;

  const url = `https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=${searchQuery}`;

  try {
    const photosResponse = await axios.get(url);
    const photoArray = photosResponse.data.results.map(photo => new Photo(photo));
    response.status(200).send(photoArray);
  } catch (err) {
    console.error('error from superagent', err);
    response.status(500).send('server error');
  }
}

class Photo {
  constructor(obj) {
    this.img_url = obj.urls.regular;
    this.original_image = obj.links.self;
    this.photographer = obj.user.name;
  }
}

app.get('*', notFound);

function notFound(request, response) {
  response.status(404).send('the page you are looking for is not there');
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
