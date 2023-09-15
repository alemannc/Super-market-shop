const express = require('express');
const commentRouter =express.Router();
const postComment = require("../Handlers/commentHandler/postComment.js");


commentRouter.post('/',(req,res)=>{
     postComment(req,res);

 });

 module.exports = commentRouter;