const { Producto } = require("../src/db");

const createProducto = async ( name, price, description, image, stock, brand, expirationdate, categories ) => {
const newProducto = await Producto.create({ name, price, description, image, stock, brand, expirationdate, categories });  
console.log(newProducto)
return newProducto;
};

module.exports = createProducto;
