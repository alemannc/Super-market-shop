const express = require("express");
require("dotenv").config();
const morgan = require('morgan');
const routes = require('./Routes/index');
const cors = require('cors');
const fileUpload = require("express-fileupload");
// const multer = require('multer'); // Importa multer
// const upload = multer({ dest: 'uploads/' }); // Configura la ubicación donde se guardarán los archivos


const server = express();


server.use(express.json());
server.use(cors());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// IMAGES DESDE EL FRONT 
//  server.use(upload.array('image'));
server.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
    safeFileNames: true,
  })
);

server.use('/',routes)
server.use(morgan('dev'));


module.exports = server;
