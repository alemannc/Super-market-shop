require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const productoFunction = require("../models/Producto")
//const clienteFunction = require("../models/Cliente")
//const ordenFunction = require("../models/Ventas")
const { DB_USER, DB_PASSWORD, DB_HOST, PORT, BD, DB_DEPLOY } = process.env;


//const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${BD}`, {
  //logging: false, 
//});

const sequelize = new Sequelize(
  DB_DEPLOY,
  {
    logging: false,
    native: false,
  }
  );
  
  productoFunction(sequelize);
  //clienteFunction(sequelize);
  //ordenFunction(sequelize);
  
  // Para relacionarlos hacemos un destructuring
  //const { Producto, Cliente, Ventas } =
  //sequelize.models;

  //Cliente.belongsToMany(Producto, { through: "Cliente-Producto" });
  //Producto.belongsToMany(Cliente, { through: "Cliente-Producto" });

 
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
