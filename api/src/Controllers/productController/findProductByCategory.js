const { Product, Category } = require('../../db');

const findProductsByCategory = async (categoryId) => {
    const products = await Product.findAll({
        include: {
          model: Category,
          attributes: ['name'],
          where: { id: categoryId },
          through: { attributes: [] }, 
        },
      });
      return products;
}

module.exports =findProductsByCategory;
  