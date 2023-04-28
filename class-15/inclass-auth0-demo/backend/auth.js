// copy and paste this file into your backend application!

'use strict';

const jwt = require('jsonwebtoken'); // auth
const jwksClient = require('jwks-rsa'); // auth

// This is our function we created to verify our user
// This is a special function for express called "Middleware"
// We can simply "use()" this in our server
// When a user is validated, request.user will contain their information
// Otherwise, this will force an error
function verifyUser(request, response, next) {

  function valid(err, user) {
    request.user = user;
    next();
  }

  try {
    const token = request.headers.authorization.split(' ')[1];
    // this console allows me to grab the token so I can use it to test it in ThunderClient
    // make a request from the client-side, get my token back, then test it in ThunderClient
    console.log("Token: ", token);
    // we get .verify from jwt - it verifies the user
    jwt.verify(token, getKey, {}, valid);
  } catch (error) {
    next('Not Authorized');
  }
}


// =============== HELPER METHODS, pulled from the jsonwebtoken documentation =================== //
//                 https://www.npmjs.com/package/jsonwebtoken                                     //

// Define a client, this is a connection to YOUR auth0 account, using the URL given in your dashboard
const client = jwksClient({
  // this url comes from your app on the auth0 dashboard
  jwksUri: process.env.JWKS_URI,
});

// Match the JWT's key to your Auth0 Account Key so we can validate it
function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}



module.exports = verifyUser;