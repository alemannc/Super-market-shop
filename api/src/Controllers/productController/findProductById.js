const { Product, Comment, Customer } = require("../../db");

const findProductById = async (id) => {
  const product = await Product.findByPk(id, {
    include: [
      {
        model: Comment,
        include: {
          model: Customer,
        },
      },
    ],
  });

  return product;
};

module.exports = findProductById;