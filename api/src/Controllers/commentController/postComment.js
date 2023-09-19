const { Comment } = require("../../db.js");

const createComment = async (content, calification) => {
  const newComment = await Comment.create({
    content: content,
    calification: calification,
  });
  return newComment;
};

module.exports = createComment;