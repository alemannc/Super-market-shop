const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const routes = require("../Routes/indexRutas");
require("../src/db");

const server = express();

const cors = require("cors");

server.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Si es necesario, habilita el envío de cookies o credenciales
  })
);

server.use(express.json());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", routes)




module.exports = server;
