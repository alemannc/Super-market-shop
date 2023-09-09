const { Router }  = require("express");

const getallProducts = require("../../Controllers/productController/getallProducts");

const router = Router();

const getAll = async (req, res) => {
    try {
    const Products = await getallProducts();
      res.status(201).json(Products);
    } catch (error) {
      if (error.status === 404) {
        res.status(404).json({ Error: error.message });
      } else {
        res.status(500).json({ Error: error.message });
      }
    }
  };

  module.exports = getAll;
