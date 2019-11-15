// IMPORT DEPENDENCIES

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");

// IMPORT HELPERS

const authenticate = require("../helpers/auth/authenticate-middleware");
const authRouter = require("../helpers/auth/auth-router");
const jokesRouter = require("../helpers/jokes/jokes-router");
const sessionConfig = require("../helpers/session-helper");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

server.use("/api/auth", authRouter);
server.use("/api/jokes", authenticate, jokesRouter);

module.exports = server;
