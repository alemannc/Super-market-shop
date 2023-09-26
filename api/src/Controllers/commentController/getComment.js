const { Comment, Product, Customer } = require("../../db");

const getallComment = async () => {
  const CommentFind = await Comment.findAll({
    include: [
        {
          model: Customer, 
          attributes: ['name'],
        },
      ],
    });

  if (CommentFind.length > 0) {
    return CommentFind;
  } else {
    return [];
  }
};

module.exports = getallComment;
