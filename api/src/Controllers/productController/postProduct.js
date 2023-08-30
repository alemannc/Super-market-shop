const { Product } = require("../../db");

const createProducto = async ( name, price, description, image, stock, brand, expirationdate, categories ) => {
const newProduct = await Product.create({ name, price, description, image, stock, brand, expirationdate, categories });  
console.log(newProduct)
return newProduct;
};

module.exports = createProducto;
