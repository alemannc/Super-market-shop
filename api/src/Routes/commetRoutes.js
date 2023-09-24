const express = require('express');
const commentRouter = express.Router();
const postComment = require("../Handlers/commentHandler/postComment.js");
const getAllComment = require('../Handlers/commentHandler/getComment.js')
const verifyToken = require('../utils/verifyToken')

commentRouter.post('/', verifyToken, (req, res) => {
   postComment(req, res);

});

commentRouter.get('/', verifyToken, (req, res) => {
   getAllComment(req, res);
});

module.exports = commentRouter;