const { Product } = require("../../db");

const findProductById = async (id) => {
  const Products = await Product.findByPk(id);
  console.log()
  return Products;
};

module.exports = findProductById;