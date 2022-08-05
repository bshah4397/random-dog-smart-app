import * as React from "react";
import Patient from './Patient'
import StaticPatient from './StaticPatient';


function App({ patient, meds }) {
  if (!(patient && meds)) console.log('Rendering Static App');
  if (patient && meds) return <Patient patient={patient} meds ={meds}/>;
  else return <StaticPatient/>
}

export default App;
