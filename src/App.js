import * as React from "react";
import Patient from './Patient'
import StaticPatient from './StaticPatient';


function App({ patient, meds }) {
  sessionStorage.clear()

  if (!(patient)) console.log('Rendering Static App');
  if (patient) return <Patient patient={patient} meds ={meds}/>;
  else return <StaticPatient/>
}

export default App;
