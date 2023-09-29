const CategoriesByName = require('../../Controllers/categories/ByNameCategory');


const ByNameCategories = async (req, res) => {
    const { name } = req.query;
    try {
        const categories = await CategoriesByName(name);
        if (categories.length === 0) {
            return res.status(404).send({ error: "No se encontraron categorias para tu bésqueda" });
        } else {
            res.status(200).json(categories);
        }
    } catch (err) {
        if (err.status === 404) {
            res.status(404).json({ Error: err.message });
        }
    }
};

module.exports = ByNameCategories;