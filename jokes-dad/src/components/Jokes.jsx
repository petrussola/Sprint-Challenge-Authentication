import React, { useEffect } from "react";
import axios from "axios";

const baseEndPoint = "http://localhost:3300/api";

export default function Jokes(props) {
  useEffect(() => {
    axios
      .get(`${baseEndPoint}/jokes`)
      .then(data => {
        debugger;
      })
      .catch(error => {
        debugger;
      });
  }, []);

  return <div>Hello from jokes component</div>;
}
