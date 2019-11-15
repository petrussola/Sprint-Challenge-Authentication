const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../helpers/auth/authenticate-middleware");
const authRouter = require("../helpers/auth/auth-router");
const jokesRouter = require("../helpers/jokes/jokes-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/jokes", authenticate, jokesRouter);

module.exports = server;
