const axios = require("axios");
const findShoppingCartById = require("../../Controllers/shoppingCartController/ShoppingCartByIdController");

  const getShoppingCartById = async (req, res) => {
    const { id } = req.params;
    try {
      const ShoppingCartFind = await findShoppingCartById(id);
      if (ShoppingCartFind) {
        res.status(200).json(ShoppingCartFind);
      } else {
        res.status(404).json({ mje: "Shopping Cart not found" });
      }
    } catch (error) {
      res.status(500).json({
        error: `Error: ${error.message}`,
      });
    }
  };

  module.exports=getShoppingCartById; 