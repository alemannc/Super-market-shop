const productUpdateController = require ('../../Controllers/productController/putStockLogicalDelete');

const productUpdate = async (req, res) => {
    try {
        const  id  = req.params.productId;
        const updatedProductData = req.body;
       
        const product = await productUpdateController(id, updatedProductData);
       
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = productUpdate;