const { Producto } = require("../src/db");

const createProducto = async ( nombre, precio, descripcion, imagen, inventario, marca, vencimiento, categoria ) => {
const newProducto = await Producto.create({ nombre, precio, descripcion, imagen, inventario, marca, vencimiento, categoria });  
console.log(newProducto)
return newProducto;
};

module.exports = createProducto;
