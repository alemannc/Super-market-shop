require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const productModel = require("./Models/Product.js");
const CustomerModel = require('./Models/Customer.js');
const OrderDetailModel = require("./Models/OrderDetail.js");
const OrderModel = require("./Models/Order.js");

const { DB_DEPLOY } = process.env;

//const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  //logging: false, // set to console.log to see the raw SQL queries
  //native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//});

const sequelize = new Sequelize(
  DB_DEPLOY,
  {
    logging: false,
    native: false,
  }
  );


const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/Models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/Models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
CustomerModel(sequelize);
productModel(sequelize);
OrderDetailModel(sequelize);
OrderModel(sequelize);

const { Product, Customer, Orderdetail, Order } = sequelize.models;
// Aca vendrian las relaciones
// Product.hasMany(Reviews);

// Ralacion cliente-Producto- muchos a muchos muchos clientes pueden comprar muchos productos
Customer.belongsToMany(Product, { through: "Customer-Product" });
Product.belongsToMany(Customer, { through: "Customer-Product" });

// Relacion producto order-detail de muchos  muchos 
Product.belongsToMany(Orderdetail, { through: "Product-Orderdetail" });
Orderdetail.belongsToMany(Product, { through: "Product-Orderdetail" });

// Relacion customer - Order Relacion de uno a muchos
Customer.hasMany(Order, { foreignKey: 'clienteId' });
Order.belongsTo(Customer, { foreignKey: 'clienteId' });


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};