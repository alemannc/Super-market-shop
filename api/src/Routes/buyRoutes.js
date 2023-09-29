const express = require('express');
const buyRouter =express.Router();

const getBuyUser = require('../Handlers/BuyHandler/getAllBuy');
const getOrderById = require('../Controllers/OrderController/getOrderById');


buyRouter.get('/', async (req, res) => {
  try {
    const result = await getBuyUser(req, res);
    res.json(result);
  } catch (error) {
    console.error('Error en la ruta de compras:', error);
    res.status(500).json({ error: 'Error en la consulta de compras' });
  }
});

buyRouter.get("/:id", async (req, res) => {
    const {id} = req.params;
    // console.log(id);
    //console.log("🚀 ~ file: getOrderById.js:6 ~ orderById ~ d:", id)
    try {
        const orderId = await getOrderById(id);
        // console.log(orderId);
        if(orderId){
            res.status(200).send(orderId);
        }
        else{
            res.status(404).send("Order Id not found");
        }
    } catch(error) {
         res.status(500).json({ error: error.message });
    }




});


  module.exports = buyRouter;