// IMPORT DEPENDENCIES

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
require("dotenv").config();

// IMPORT HELPERS

const authenticate = require("../helpers/auth/authenticate-middleware");
const authRouter = require("../helpers/auth/auth-router");
const jokesRouter = require("../helpers/jokes/jokes-router");
// const sessionConfig = require("../helpers/session-helper");

const server = express();

server.use(helmet());
server.use(cors({ origin: "http://localhost:3001", credentials: true }));
server.use(express.json());
server.use(
  session({
    name: "user-session",
    secret: "thisisthemostsecretevercreatedintheworld",
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false,
      httpOnly: false
    },
    resave: false,
    saveUninitialized: false
  })
);

server.use("/api/auth", authRouter);
server.use("/api/jokes", authenticate, jokesRouter);

// server.get(
//   "/cookie",
//   // cors(corsOptions),
//   (req, res) => {
//       const options = {
//         secure: false,
//         httpOnly: false,
//         domain: "localhost"
//       };
//       res
//         .cookie("cookieName", "cookieValue", options)
//         .status(200)
//         .send("cookie sent");
//     // req.session.hello = "hello";
//     // res.status(200).json({ message: "Cookie sent" });
//   }
// );

module.exports = server;
