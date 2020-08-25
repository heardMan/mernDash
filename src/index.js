import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <Auth0Provider
    domain="dev-8k5j15hl.us.auth0.com"
    clientId="2n0HoRVHEMKvGouaqu6YfPS5MtP4W1Mc"
    redirectUri={window.location.origin}
    //audience="https://dev-8k5j15hl.us.auth0.com/api/v2/"
    audience="https://api.shipDash.com"
    //scope="read:current_user update:current_user_metadata"
    scope="read:orders read:shipments"
    useRefreshTokens={true} 
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
