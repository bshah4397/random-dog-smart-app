import * as React from "react";
import Patient from "./Patient";
import { PostMessageFrame } from "./PostMessage";
import { MessageListener } from "./MessageListener";

function App({ patient, meds }) {
  sessionStorage.clear();

  if (!patient) console.log("Rendering Static App");
  if (patient) return <Patient patient={patient} meds={meds} />;
  else
    return (
      <div>
        <PostMessageFrame />
        <hr />
        <MessageListener />
      </div>
    );
}

export default App;
