'use strict';

const axios = require('axios');

let cache = {};

// TODO: create a key for each query
// TODO: if the results exist AND they are within a vaild timeframe ... send that data from the cache
// TODO: if the results don't exist, hit API, and then add that info to the cache


async function getPhotos(request, response, next) {
  try {
    let myLocalCity = request.query.city;
    let key = `${myLocalCity}-photos`; // key -> seattle-photos

    if (cache[key] && (Date.now() - cache[key].timeStamp) < 10000) {
      console.log('cache was hit!', cache);
      response.status(200).send(cache[key].data);

    } else {
      console.log('cache was missed!');
      let url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${myLocalCity}`;

      let photosFromAxios = await axios.get(url);

      let dataToSend = photosFromAxios.data.results.map(obj => new Photo(obj));

      // TODO: ADD DATA TO CACHE
      cache[key] = {
        data: dataToSend,
        timeStamp: Date.now()
      };

      response.status(200).send(dataToSend);
    }


  } catch (error) {
    next(error);
  }
}


class Photo {
  constructor(picObj) {
    this.src = picObj.urls.regular;
    this.alt = picObj.alt_description;
    this.username = picObj.user.name;
  }
}

module.exports = getPhotos;
// module.exports = { function1, function2, function3 }
