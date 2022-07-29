// import './App.css';
// import { PatientVisualizer } from 'fhir-visualizers';
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Image from 'react-bootstrap/Image'
// import { Container, Row, Col, } from 'react-bootstrap';
// import { dogPuns } from './dogPuns';



// function App(props) {
//   const client = props.client;
//   const [patient, setPatient] = useState(null);
//   const [dogImage, setDogImage] = useState(null);
//   const [dogPunSelected, setDogPunSelected] = useState(null);

//   useEffect(() => { client.patient.read().then((patient) => setPatient(patient)); });

//   useEffect(() => {
//     const fetchDogImage = async () => {
//       const response = await fetch('https://random.dog/woof.json?filter=mp4,webm');
//       const data = await response.json();
//       setDogImage(data.url);
//       setDogPunSelected(dogPuns[Math.floor(Math.random() * dogPuns.length)]);
//     }

//     fetchDogImage();
//   }, []);

//   return (
//     <div id="app" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
//       <Container>

//         <Row className="justify-content-md-center">
//           <Col md="auto"><h3>{dogPunSelected}</h3></Col>
//         </Row>

//         <Row className="justify-content-md-center">
//           {dogImage ? <Col md="auto"><Image src={dogImage} height="400px" /></Col> : <h2>Loading...</h2>}
//         </Row>

//         <Row className="justify-content-md-center">
//           {patient ? <Col md="auto"><PatientVisualizer patient={patient} /></Col> : <h1>Loading</h1>}
//         </Row>

//       </Container>
//     </div>
//   );
// }

// export default App;


import * as React from "react";
import { getPath } from "fhirclient/lib/lib";
import { PatientVisualizer } from 'fhir-visualizers';

const rxnorm = "http://www.nlm.nih.gov/research/umls/rxnorm";

function getMedicationName(medCodings = []) {
  let out = "Unnamed Medication(TM)";
  const coding = medCodings.find((c) => c.system === rxnorm);
  if (coding && coding.display) {
    out = coding.display;
  }
  return out;
}

function PatientName({ name = [] }) {
  let entry =
    name.find((nameRecord) => nameRecord.use === "official") || name[0];
  if (!entry) {
    return <h1>No Name</h1>;
  }
  return <h1>{entry.given.join(" ") + " " + entry.family}</h1>;
}

// eslint-disable-next-line no-unused-vars
function PatientBanner(patient) {
  return (
    <div>
      <PatientName name={patient.name} />
      <span>
        Gender: <b>{patient.gender}</b>,{" "}
      </span>
      <span>
        DOB: <b>{patient.birthDate}</b>
      </span>
    </div>
  );
}

function MedRow({ med }) {
  const name = getMedicationName(
    getPath(med, "medicationCodeableConcept.coding") ||
      getPath(med, "medicationReference.code.coding")
  );
  return (
    <tr>
      <td>
        <b>{name}</b>
      </td>
      <td>{med.status || "-"}</td>
      <td>{med.intent || "-"}</td>
      <td>{getPath(med, "dosageInstruction.0.text") || "-"}</td>
    </tr>
  );
}

function App({ patient, meds, everything }) {
  console.log(patient);
  console.log(everything);
  return (
    <div className="App" style={{padding: '20px'}}>
      {patient ? <PatientVisualizer patient={patient} /> : <h1>Loading</h1>}
      <hr/>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Medication</th>
            <th>Status</th>
            <th>Intent</th>
            <th>Dosage Instruction</th>
          </tr>
        </thead>
        <tbody>
          {meds.map((med) => (
            <MedRow key={med.id} med={med} />
          ))}
        </tbody>
      </table>
      {/* <pre>{ JSON.stringify(meds, null, 4) }</pre> */}
    </div>
  );
}

export default App;
