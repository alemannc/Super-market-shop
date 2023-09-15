const { Product } = require('../../db');

const productUpdateController = async (id, updatedProductData) => {
    
    const productUpdate = await Product.findByPk(id);
    
    
    if (!productUpdate) {
        throw new Error('Product not found');
    }

    await productUpdate.update(updatedProductData);

    // console.log("🚀 ~ file: putStockLogicalDelete.js:15 ~ productUpdateController ~ productUpdate:", productUpdate)
    return productUpdate;
}

module.exports = productUpdateController;