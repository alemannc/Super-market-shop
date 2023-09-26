const axios = require("axios");
const updateShoppingCart = require("../../Controllers/shoppingCartController/updateShoppingCart");


function combineProductsByName(products) {
  const combinedProducts = {};

  for (const product of products) {
    const { productDetails, quantity } = product;
    const productId = productDetails.id;

    if (combinedProducts[productId]) {
      combinedProducts[productId].quantity += quantity;
    } else {
      combinedProducts[productId] = { productDetails, quantity };
    }
  }

  return Object.values(combinedProducts);
}

const putCustomer = async (req, res) => {
  let { shoppinId, ProductName, PriceTotal } = req.body;

  if (!shoppinId) {
    res.status(401).json({ error: 'Missing data. Shopping ID!' });
  } else if (!ProductName) {
    res.status(401).json({ error: 'Missing data. Product Name!' });
  } else if (PriceTotal < 0) {
    res.status(401).json({ error: 'Missing data. Price Total!' });
  } else {
    try {
      const combinedProducts = combineProductsByName(ProductName);
      console.log("🚀 ~ file: putSCHandler.js:34 ~ putCustomer ~ combinedProducts:", combinedProducts)
   
      const updatedShopping = await updateShoppingCart(shoppinId, {
        ProductName: combinedProducts,
        PriceTotal,
      });
      res.status(200).json(updatedShopping);
    } catch (error) {
      res.status(500).json({ error: 'Shopping cart not modified: ' + error.message });
    }
  }
}

module.exports = putCustomer;