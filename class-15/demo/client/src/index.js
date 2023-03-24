import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

// once you sign up for an Auth0 account, they will provide you with the domain and clientId
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      redirectUri={process.env.REACT_APP_AUTH_REDIRECT_URI}
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>
);

