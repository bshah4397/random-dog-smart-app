import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import FHIR from 'fhirclient';

const rootElement = document.getElementById('root');

const smartLaunch = () => {

  FHIR.oauth2
    .init({
      // clientId: '20560ea5-f224-4658-b667-4e6bab935c85',  // Random clientId
      // clientId: '29f8073d-e615-406f-9ab8-d22922829a6c',  // Cerner clientId
      clientId: '0oamrpbycykHySdrd1t7',                     // XDGE clientId
      // scope: 'launch/patient openid profile'
      scope: 'launch openid profile'
    })
    .then(client => {
      console.log("SmartApp:Client => ", client);
      ReactDOM.render(<App client={client} />, rootElement);
    });
};

smartLaunch();