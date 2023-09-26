const express = require('express');
const buyRouter =express.Router();

const getBuyUser = require('../Handlers/BuyHandler/getAllBuy');

buyRouter.get('/', async (req, res) => {
  try {
    const result = await getBuyUser(req, res);
    res.json(result);
  } catch (error) {
    console.error('Error en la ruta de compras:', error);
    res.status(500).json({ error: 'Error en la consulta de compras' });
  }
});


  module.exports = buyRouter;