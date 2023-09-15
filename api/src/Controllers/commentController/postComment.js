const { Comment } = require("../../db.js");

const createComment = async (id, text, calification, userName) => {

    const newComment = await Comment.create({
        id: id,
        text: text,
        calification: calification,
        userName: userName,
    });
    return newComment;
};

module.exports = createComment;