'use strict';

function notFound(request, response) {
  console.log('route not found');
  response.status(404).send('not found');
}

module.exports = notFound;
