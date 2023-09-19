const { Comment ,Product } = require("../../db");

const getallComment = async () => {
    const CommentFind= await Comment.findAll();
    
    if(CommentFind.length>0){
    return CommentFind;
    }else{
        return []
    }
};


module.exports = getallComment;