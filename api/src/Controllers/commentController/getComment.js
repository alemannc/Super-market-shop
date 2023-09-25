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
    console.log("🚀 ~ file: getComment.js:15 ~ getallComment ~ CommentFind:", CommentFind)
  } else {
    return [];
  }
};

module.exports = getallComment;
