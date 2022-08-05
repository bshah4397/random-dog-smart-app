import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
// import { oauth2 as SMART } from "fhirclient";
import { oauth2 as SMART } from 'fhirclient-pkce';

const rootElement = document.getElementById('root');

SMART.init({
    // iss: "https://r4.smarthealthit.org",
    // iss: "https://api.platform.athenahealth.com/432/brand/2/csg/12/fhir/r4",
    // redirectUri: "index.html",
    // clientId: "0oae0chrocZumXh7y297",  // Internal AMS
    clientId: "0oae3i5p2p4ikNR4C297",     // External AMS
    scope: "launch offline_access openid fhirUser",
    pkceMode: "required",

    // WARNING: completeInTarget=true is needed to make this work in the codesandbox
    // frame. It is otherwise not needed if the target is not another frame or window
    // but since the entire example works in a frame here, it gets confused without
    // setting this!
    completeInTarget: true
})
    .then(client => {
        // Fetch MedicationRequest and Patient in parallel to load the app faster
        return Promise.all([
            client.patient.read(),
            client.request(`/MedicationRequest?patient=${client.patient.id}`, {
                resolveReferences: "medicationReference",
                pageLimit: 0,
                flat: true
            }),
        ]);
    })
    .then(
        ([patient, meds]) => {
            render(<App 
                patient={patient} 
                meds={meds}
            />, rootElement);
        },
        error => {
            console.error(error);
            render(<App 
                patient={undefined} 
                meds={undefined}
            />, rootElement);
        }
    );
