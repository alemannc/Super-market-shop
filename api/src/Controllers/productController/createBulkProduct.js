const { Product } = require("../../db");

const createBulkProduct = async (products) =>{
    console.log("Entro enel Bulk")
	const newProduct = await Product.bulkCreate(products);
	
    console.log(newProduct);
	return products;
}

module.exports = createBulkProduct;