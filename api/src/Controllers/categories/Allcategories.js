const { Category } = require("../../db");

const getallCategories = async () => {
const category = await Category.findAll();  
return category;
};

module.exports = getallCategories;
