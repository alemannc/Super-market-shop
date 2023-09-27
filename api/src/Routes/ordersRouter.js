const express = require('express');
const ordersRouter = express.Router();
// const getAllOrders = require("../Handlers/OrderHandler/getAllOrders");
const getOrderById = require("../Handlers/OrderHandler/getOrderById");


// ordersRouter.get("/", (req,res)=>{
//     getAllOrders(req,res);
// });

ordersRouter.get("/buy/:id", (req,res)=>{
    getOrderById(req,res);
});

module.exports = ordersRouter;

