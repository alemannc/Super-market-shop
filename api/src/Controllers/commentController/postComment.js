const { Comment } = require("../../db.js");

const createComment = async ( text, calification, userName) => {
console.log("🚀 ~ file: postComment.js:4 ~ createComment ~ text, calification, userName:", text, calification, userName)

    const newComment = await Comment.create({
        text: text,
        calification: calification,
        userName: userName,
    });
    return newComment;
};

module.exports = createComment;