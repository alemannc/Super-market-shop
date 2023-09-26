const { Product, Category, Comment, Customer } = require("../../db");

const getallProduct = async () => {
  const productFind = await Product.findAll({
    include: [
      {
        model: Category,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      {
        model: Comment, 
        include: {
          model: Customer,
          attributes: ["name"],
        },
      },
    ],
  });
  if (productFind.length > 0) {
    return productFind;
  } else {
    return [];
  }
};

module.exports = getallProduct;
