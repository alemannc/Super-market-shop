const { Category } = require("../../db");

const findCategoryById = async (id) => {
  const category = await Category.findByPk(id);
  console.log()
  return category;
};

module.exports = findCategoryById;