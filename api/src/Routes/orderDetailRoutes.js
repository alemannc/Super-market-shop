const express = require('express');
const orderDetailRouter =express.Router();
const postOrderDetail = require ("../Handlers/orderDetailHandler/postOrderDetail");
const getDetailById = require("../Handlers/orderDetailHandler/getOrderDetailById")

orderDetailRouter.post("/post", (req,res)=>{
    postOrderDetail(req,res);
});

orderDetailRouter.get("/:id" ,(req,res)=>{
    getDetailById(req,res)
});


module.exports = orderDetailRouter;