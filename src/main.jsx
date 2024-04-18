import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-3adk5t5jev745f5j.us.auth0.com"
     clientId="kXCG2wEVVDpLGVPSJCyLckuYzW0oejRs"
     authorizationParams={{
       redirect_uri: window.location.origin
     }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
)
