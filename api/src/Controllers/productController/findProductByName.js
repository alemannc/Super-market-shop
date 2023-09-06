const { Op } = require('sequelize');
const { Product } = require('../../db');

const findProductByName = async (name) => {
    const Products = await Product.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    return Products;
  };

module.exports = findProductByName;

