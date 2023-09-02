const express = require('express');
const mercadoPagoRouter = express.Router();
const postOrderMP = require ("../Handlers/mercadoPagoHandler/createOrderHandler")

mercadoPagoRouter.post("/createOrder", (req,res)=>{
    postOrderMP(req,res)
});

mercadoPagoRouter.get("/:id" ,(req,res)=>{
    getDetailById(req,res)
});


module.exports= mercadoPagoRouter;