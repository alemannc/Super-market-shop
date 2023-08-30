const express = require("express");
require("dotenv").config();
const morgan = require('morgan');
const routes = require('./Routes/index');

const server = express();


server.use(express.json());
server.use('/',routes)
server.use(morgan('dev'));
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


module.exports = server;
