import React, { useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

// COMPONENTS
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import RegistrationWelcomeMessage from "./components/RegistrationWelcomeMessage";
import Logout from "./components/Logout";
import Jokes from "./components/Jokes";

const baseEndPoint = "http://localhost:3300/api";

function App() {
  // SLICES OF STATE
  const [isRegistered, setIsRegistered] = useState(false);
  const [jokes, setJokes] = useState([]);

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
    axios
      .post(`${baseEndPoint}/auth/login`, formValues)
      .then(data => {
        debugger;
      })
      .catch(error => {
        debugger;
      });
  }

  function logoutHandler() {
    axios
      .get(`${baseEndPoint}/auth/logout`)
      .then(data => {
        debugger;
      })
      .catch(error => {
        debugger;
      });
  }

  return (
    <div className="App">
      <RegistrationForm onRegisterHandler={onRegisterHandler} />
      <RegistrationWelcomeMessage isRegistered={isRegistered} />
      <LoginForm onLoginHandler={onLoginHandler} />
      {/* <Logout isLoggedIn={isLoggedIn} logoutHandler={logoutHandler} /> */}
      <Route path="/jokes" component={Jokes} />
    </div>
  );
}

export default App;
