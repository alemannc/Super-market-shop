const express = require('express');
const productRouter = express.Router();
const postProduct = require("../Handlers/ProductHandler/postProduct.js");
const getallProducts = require("../Handlers/ProductHandler/getallProducts.js");
const getProductById = require("../Handlers/ProductHandler/findProductByid.js")
const stockLogicalDeleteHandler = require('../Handlers/ProductHandler/putStockLogicalDelete.js')
const ProductByName = require('../Handlers/ProductHandler/findProductByName.js')
const getProductsByCategory = require('../Handlers/ProductHandler/getProductsByCategory.js')
const delProduct = require('../Handlers/ProductHandler/delProduct.js')
const verifyToken = require('../utils/verifyToken')
//Para el Bulk
const createBulkProduct = require('../Controllers/productController/createBulkProduct') 

productRouter.post('/', verifyToken, (req, res) => {
  postProduct(req, res);

});

productRouter.get('/name', (req, res) => {
  ProductByName(req, res);

});

productRouter.get('/', (req, res) => {
  getallProducts(req, res);

});
productRouter.get('/categories', (req, res) => {
  getProductsByCategories(req, res);

});

productRouter.get('/productByCategory/:id', (req, res) => {
  getProductsByCategory(req, res);

});
productRouter.get('/categories', (req, res) => {
  getProductsByCategories(req, res);

});

productRouter.get('/:id', (req, res) => {
  getProductById(req, res);
});

productRouter.get('/', (req, res) => {
  getBrands(req, res);
});

productRouter.put('/:productId', verifyToken, (req, res) => {
  stockLogicalDeleteHandler(req, res);
});

// productRouter.delete('/:id',(req,res)=>{
//     delProduct(req,res);
// });


productRouter.post('/bulk', async(req, res) =>{
	
	const { products } = req.body;
  console.log(products);

	
	const created = await createBulkProduct(products)
	res.status(200).json({response: "created"});
	
});

module.exports = productRouter;