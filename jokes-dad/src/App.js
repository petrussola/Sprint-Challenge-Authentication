import React from "react";
import axios from "axios";

// COMPONENTS
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";

function App() {
  // handlers

  function onRegisterHandler(formValues) {
    console.log(formValues);
  }

  function onLoginHandler(formValues) {
    console.log(formValues);
  }

  return (
    <div className="App">
      <RegistrationForm onRegisterHandler={onRegisterHandler} />
      <LoginForm onLoginHandler={onLoginHandler} />
    </div>
  );
}

export default App;
