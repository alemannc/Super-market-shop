const { Product } = require("../../db");

const findProductById = async (id) => {
  const Products = await Product.findByPk(id);
  console.log()
  return Products;
};

module.exports = findProductById;


//const myCountry = await Country.findOne({ where: { idCountry } , include: Activity});