const { Product } = require("../../db");

const createProducto = async ( name, price, description, image, stock, brand, expirationdate, categories ) => {
const newProduct = await Product.create({ name, price, description, image, stock, brand, expirationdate, categories });  
return newProduct;
};

module.exports = createProducto;