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
      // clientId: '20560ea5-f224-4658-b667-4e6bab935c85',
      // clientId: '29f8073d-e615-406f-9ab8-d22922829a6c',
      clientId: '2facafab-e9a7-44aa-9f3d-5535984cd7ff',
      scope: 'launch/patient openid profile'
    })
    .then(client => {
      ReactDOM.render(<App client={client} />, rootElement);
    });
};

smartLaunch();