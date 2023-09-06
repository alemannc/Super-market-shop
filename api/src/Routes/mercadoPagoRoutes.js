const express = require('express');
const mercadoPagoRouter =express.Router();
const createOrderMP =require("../Controllers/mercadoPagoController/payment")

mercadoPagoRouter.post("/create-order", (req,res)=>{
    createOrderMP(req,res)
})
mercadoPagoRouter.get("/succes", (req,res)=>{

})
mercadoPagoRouter.post("/webhook", (req,res)=>{

})

module.exports= mercadoPagoRouter;