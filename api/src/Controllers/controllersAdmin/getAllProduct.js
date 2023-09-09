const { Product } = require("../../db");

const getallProduct = async () => {
const Products = await Product.findAll();  
return Products;
};

module.exports = getallProduct;
