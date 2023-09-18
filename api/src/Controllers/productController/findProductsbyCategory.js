const { Product } = require('../../db');

const findProductByCategories = async (category) => {
    const productsFind = await Product.findAll({
      where: {
        categories: category,
      },
    });
    return productsFind;
  };

module.exports = findProductByCategories;