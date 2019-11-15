import React, { useState } from "react";
import axios from "axios";

// COMPONENTS
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import RegistrationWelcomeMessage from "./components/RegistrationWelcomeMessage";

const baseEndPoint = "http://localhost:3300/api";

function App() {
  // SLICES OF STATE
  const [isRegistered, setIsRegistered] = useState(false);

  // HANDLERS

  function onRegisterHandler(formValues) {
    axios
      .post(`${baseEndPoint}/auth/register`, formValues)
      .then(data => {
        setIsRegistered(true);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function onLoginHandler(formValues) {
    console.log(formValues);
  }

  return (
    <div className="App">
      <RegistrationForm onRegisterHandler={onRegisterHandler} />
      <RegistrationWelcomeMessage isRegistered={isRegistered} />
      <LoginForm onLoginHandler={onLoginHandler} />
    </div>
  );
}

export default App;
