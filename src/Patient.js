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

function Patient({ 
	patient, 
	meds, 
  }) {
	console.log(patient);
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
	  </div>
	);
  }
  
  export default Patient;