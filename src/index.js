import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { oauth2 as SMART } from "fhirclient";

const rootElement = document.getElementById('root');

SMART.init({
    iss: "https://launch.smarthealthit.org/v/r3/sim/eyJoIjoiMSIsImIiOiJzbWFydC0xNjQyMDY4IiwiZSI6InNtYXJ0LVByYWN0aXRpb25lci03MTYxNDUwMiJ9/fhir",
    // iss: "https://api.platform.athenahealth.com/432/brand/2/csg/12/fhir/r4", //TODO:
    redirectUri: "/",
    clientId: "0oae0chrocZumXh7y297",          // XDGE Test SMART App (prod)
    // clientId: "0oamrpbycykHySdrd1t7",       // XDGE Test SMART App (dev)
    // clientId: "",                           // BMI Calculator (prod)
    // clientId: "0oaoh6jbmiy2NYaOR1t7",       // BMI Calculator (dev)
    scope: "launch/patient offline_access openid fhirUser",

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
            })
        ]);
    })
    .then(
        ([patient, meds]) => {
            render(<App patient={patient} meds={meds} />, rootElement);
        },
        error => {
            console.error(error);
            render(
                <>
                    <br />
                    <pre>{error.stack}</pre>
                </>,
                rootElement
            );
        }
    );
