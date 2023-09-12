const categoriesById = require('../../Controllers/categories/byIdCategories');

const byIdCategories = async (req, res) => {
    const { id } = req.params;
    try {
        const categories = await categoriesById(id);
        res.status(200).json(categories);
    } catch (err) {
        if (err.status === 404) {
            res.status(404).json({ Error: err.message });
        } else {
            res.status(500).json({ Error: err.message });
        }
    }
};

module.exports = byIdCategories;