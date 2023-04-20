'use strict';

const axios = require('axios');


async function getPhotos(request, response, next) {
  try {
    let myLocalCity = request.query.city;

    let url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${myLocalCity}`;

    let photosFromAxios = await axios.get(url);

    let dataToSend = photosFromAxios.data.results.map(obj => new Photo(obj));

    response.status(200).send(dataToSend);
  } catch (error) {
    next(error);
  }
}


// *** EXAMPLE OF REFACTOR BUT NOT NEED FOR LAB!!! ***
// function getPhotosRefactored(request, response, next) {

//   let myLocalCity = request.query.city;

//   let baseUrl = 'https://api.unsplash.com/search/photos';

//   let queryStrings = {
//     client_id: process.env.UNSPLASH_API_KEY,
//     query: myLocalCity,
//   };

//   axios.get(baseUrl, { params: queryStrings })
//     .then(photosFromAxios => photosFromAxios.data.results.map(obj => new Photo(obj)))
//     .then(dataToSend => response.status(200).send(dataToSend))
//     .catch(error => next(error));

// }



class Photo {
  constructor(picObj) {
    this.src = picObj.urls.regular;
    this.alt = picObj.alt_description;
    this.username = picObj.user.name;
  }
}

module.exports = getPhotos;
// module.exports = { function1, function2, function3 }
