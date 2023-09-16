const { Comment } = require("../../db.js");

const createComment = async ( text, calification, userName) => {

    const newComment = await Comment.create({
        text: text,
        calification: calification,
        userName: userName,
    });
    return newComment;
};

module.exports = createComment;