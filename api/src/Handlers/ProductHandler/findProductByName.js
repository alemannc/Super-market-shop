const findProductByName = require("../../Controllers/productController/findProductByName");

const ProductByName = async (req, res) => {
    const { name } = req.query;

    try {
        const productName = await findProductByName(name)
        if (productName.length === 0 ) {
            return res.status(404).send({ error: "No se encontraron productos para tu búsqueda" });
        } else {
            return res.status(200).json(productName);
        }
    } catch (error) {
        return res.status(500).json({ error: 'Search term is missing in the request.' });
    }
};

module.exports = ProductByName;

