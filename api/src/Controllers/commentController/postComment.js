const { Comment } = require("../../db.js");

const createComment = async ( text, calification) => {
console.log("🚀 ~ file: postComment.js:4 ~ createComment ~ text, calification, userName:", text, calification)

    const newComment = await Comment.create({
        text: text,
        calification: calification,
    });
    return newComment;
};

module.exports = createComment;