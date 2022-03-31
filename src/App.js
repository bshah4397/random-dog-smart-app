import './App.css';
import { PatientVisualizer } from 'fhir-visualizers';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col, } from 'react-bootstrap';
import { dogPuns } from './dogPuns';



function App(props) {
  const client = props.client;
  const [patient, setPatient] = useState(null);
  const [dogImage, setDogImage] = useState(null);
  const [dogPunSelected, setDogPunSelected] = useState(null);

  useEffect(() => { client.patient.read().then((patient) => setPatient(patient)); });

  useEffect(() => {
    const fetchDogImage = async () => {
      const response = await fetch('https://random.dog/woof.json?filter=mp4,webm');
      const data = await response.json();
      setDogImage(data.url);
      setDogPunSelected(dogPuns[Math.floor(Math.random() * dogPuns.length)]);
    }

    fetchDogImage();
  }, []);

  return (
    <div id="app" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
      <Container>

        <Row className="justify-content-md-center">
          <Col md="auto"><h3>{dogPunSelected}</h3></Col>
        </Row>

        <Row className="justify-content-md-center">
          {dogImage ? <Col md="auto"><Image src={dogImage} height="400px" /></Col> : <h2>Loading...</h2>}
        </Row>

        <Row className="justify-content-md-center">
          {patient ? <Col md="auto"><PatientVisualizer patient={patient} /></Col> : <h1>Loading</h1>}
        </Row>

      </Container>
    </div>
  );
}

export default App;
