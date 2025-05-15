import * as React from "react";
import Patient from './Patient'
import StaticPatient from './StaticPatient';


function App({ patient, meds }) {
  sessionStorage.clear()

  if (!(patient)) console.log('Rendering Static App');
  if (patient) return <Patient patient={patient} meds ={meds}/>;
  else return (
    <div>
      <button 
        onClick= {() => {
          const messagePayload = {
            type: 'embeddedAppAPIMessage',
            method: 'notifyPatientDataChange',
            methodVersion: "1.0.0"
          };
          const targetOrigin = '*'; // Consider using a specific target origin in production for security
      
          // Notify parent window (e.g., iframe parent or opener parent, if opened from a "new window" button)
          if (window.parent && window.parent !== window) { // Check if it's truly embedded
            console.log(`(window.parent.postMessage) Sending the following message to (${targetOrigin}) :=> `, messagePayload);
            window.parent.postMessage(messagePayload, targetOrigin);
          }
      
          if (window.opener) {
            try {
              console.log(`(window.opener.postMessage) Sending the following message to (${targetOrigin}) :=> `, messagePayload);
              window.opener.postMessage(messagePayload, targetOrigin);
            } catch (e) {
              // Log error if postMessage to opener fails (e.g., if the opener window was closed)
              console.error('AppContent: Error posting message to window.opener', e instanceof Error ? e : new Error(String(e)), { targetOrigin });
            }
          }
        }}
      > Refresh Patient - Blackbird code </button>

      <button
          onClick = {() => {
            const parentOrigin = window.parent.location.origin;
            console.log(`(window.opener.postMessage) Sending the following message to (${parentOrigin}) :=> `, { type: 'embeddedAppAPIMessage', method: 'notifyPatientDataChange', methodVersion: "1.0.0" });
            window.parent.postMessage({ type: 'embeddedAppAPIMessage', method: 'notifyPatientDataChange', methodVersion: "1.0.0" }, parentOrigin);
          }}
      > Refresh Patient - Our code </button>
  </div>
  );
}

export default App;
