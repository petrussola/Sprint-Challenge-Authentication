import React, { useState } from "react";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";

// COMPONENTS
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import RegistrationWelcomeMessage from "./components/RegistrationWelcomeMessage";
import Logout from "./components/Logout";
import Jokes from "./components/Jokes";

axios.defaults.withCredentials = true;
const baseEndPoint = "http://localhost:3000/api";

function App(props) {
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
      // ({
      //   method: "post",
      //   url: `${baseEndPoint}/auth/login`,
      //   withCredentials: true,
      //   data: formValues
      // })
      .post(`${baseEndPoint}/auth/login`, formValues)
      .then(data => {
        props.history.push("/jokes");
      })
      .catch(error => {
        debugger;
      });
  }

  function logoutHandler() {
    axios
      .get(`${baseEndPoint}/auth/logout`, {withCredentials: true})
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function getCookieHandler() {
    axios
      .get("http://localhost:3000/cookie", { withCredentials: true })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <RegistrationForm onRegisterHandler={onRegisterHandler} />
      <RegistrationWelcomeMessage isRegistered={isRegistered} />
      <LoginForm onLoginHandler={onLoginHandler} />
      {/* <Logout isLoggedIn={isLoggedIn} logoutHandler={logoutHandler} /> */}
      <Route path="/jokes" component={Jokes} />
      <button onClick={getCookieHandler}>Get cookie</button>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default withRouter(App);
