const axios = require("axios");
const updateShoppingCart = require("../../Controllers/shoppingCartController/updateShoppingCart");

const putCustomer = async (req, res) => {
  const { shoppinId, ProductName, PriceTotal } = req.body;

  if (!shoppinId) {
    res.status(401).json({ error: 'Missing data. Shopping ID!' });
  } else if (!ProductName) {
    res.status(401).json({ error: 'Missing data. Product Name!' });
  } else if (PriceTotal < 0) {
    res.status(401).json({ error: 'Missing data. Price Total!' });
  } else {
    try {
      const updatedShopping = await updateShoppingCart(shoppinId, {
        ProductName,
        PriceTotal,
      });
      res.status(200).json(updatedShopping);
    } catch (error) {
      res.status(500).json({ error: 'Shopping cart not modified: ' + error.message });
    }
  }
}

module.exports = putCustomer;