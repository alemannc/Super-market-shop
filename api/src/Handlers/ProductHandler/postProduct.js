const { Router }  = require("express");

const createProducto = require("../../Controllers/productController/postProduct.js");
const router = Router();

const postCustomer = async (req,res)=>{
    try {
      const { name, price, description, image, stock, brand, expirationdate, categories } = req.body;
  //console.log(req.body)
      const newProducto = await createProducto(
        name,
        price,
        description,
        image,
        stock,
        brand,
        expirationdate,
        categories
      );
  
      res.status(201).json(newProducto);
    } catch (error) {
      if (error.status === 404) {
        res.status(404).json({ Error: error.message });
      } else {
        res.status(500).json({ Error: error.message });
      }
    }
  };
  
  module.exports = postCustomer;