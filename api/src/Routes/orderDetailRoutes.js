const express = require('express');
const orderDetailRouter =express.Router();
const postOrderDetail = require ("../Handlers/orderDetailHandler/postOrderDetail");

orderDetailRouter.post("/post", (req,res)=>{
    postOrderDetail(req,res);
});



module.exports = orderDetailRouter;