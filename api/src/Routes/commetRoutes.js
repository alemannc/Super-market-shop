const express = require('express');
const commentRouter =express.Router();
const postComment = require("../Handlers/commentHandler/postComment.js");
const getAllComment = require ('../Handlers/commentHandler/getComment.js')

commentRouter.post('/',(req,res)=>{
     postComment(req,res);

 });

 commentRouter.get('/',(req,res)=>{
    getAllComment(req, res);
 });

 module.exports = commentRouter;