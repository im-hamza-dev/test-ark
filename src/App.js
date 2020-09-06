import React from "react";
import "./App.css";
import Display from "./Components/Pages/Display";
import ContactForm from "./Components/Pages/ContactForm";

function App() {
  return (
    <>
      <Display />
      {/* due to time constraint i was unable to add router so I render both components on the same page */}
      <ContactForm />
    </>
  );
}

export default App;
