const findProductByCategories = require("../../Controllers/productController/findProductsbyCategory");

const getProductByCategories = async (req, res) => {
    const { categories } = req.query;

    try {
        const productCatFind = await findProductByCategories(categories)
        if (productCatFind.length === 0 ) {
            return res.status(404).send({ error: "No se encontraron productos para tu búsqueda" });
        } else {
            return res.status(200).json(productCatFind);
        }
    } catch (error) {
        return res.status(500).json({ error: 'Search term is missing in the request.' });
    }
};

module.exports = getProductByCategories;