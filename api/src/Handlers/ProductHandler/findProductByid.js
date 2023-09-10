const { Router } = require("express");

const findProductById = require("../../Controllers/productController/findProductById.js");
const router = Router();

const getProductById = async (req, res) => {
      const { id } = req.params;
      // console.log(id)
  try {
    const product = await findProductById(id);
    res.status(201).json(product);
  } catch (error) {
    if (error.status === 404) {
      res.status(404).json({ Error: error.message });
    } else {
      res.status(500).json({ Error: error.message });
    }
  }
};

module.exports = getProductById;
