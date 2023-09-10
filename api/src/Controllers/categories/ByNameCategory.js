const { Op } = require('sequelize');
const { Category } = require('../../db');

const findCategoryByName = async (name) => {
    const CategoryName = await Category.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    return CategoryName;
  };

module.exports = findCategoryByName;