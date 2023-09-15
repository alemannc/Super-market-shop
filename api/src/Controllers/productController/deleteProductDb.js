const { Product } = require("../../db");

const deleteProduct = async (id) => {
  const productFind = await Product.findByPk(id);

  await productFind.destroy();
  console.log("🚀 ~ Y se marcho!!!!!!!!!!!!", id)
  return id;
};

module.exports = deleteProduct;
