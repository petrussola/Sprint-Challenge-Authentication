import React, { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;
const baseEndPoint = "http://localhost:3000/api";

export default function Jokes(props) {
  const [jokes, setJokes] = useState([]);

  function fetchJokes() {
    axios
      .get(`${baseEndPoint}/jokes`, { withCredentials: true })
      .then(res => {
        setJokes(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <button onClick={fetchJokes}>Fetch jokes</button>
      {jokes.length > 0 ? (
        <div>jokes fetched correctly</div>
      ) : (
        <div>error fetching</div>
      )}
    </div>
  );
}
