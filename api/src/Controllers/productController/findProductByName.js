const { Op } = require('sequelize');
const { Product, Category } = require('../../db');

const findProductByName = async (name) => {
  const Products = await Product.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    }, include: {
      model: Category,
      attributes: ['name'],
      through: {
        attributes: []
      }
    }
  });
  return Products;
};

module.exports = findProductByName;

