const createCategory = require('../../Controllers/categories/postCategories');


const postCategories = async (req, res) => {
    const  name  = req.body;

    try {
        const category = await createCategory(name);
        res.status(201).json(category);
    } catch (err) {  
        res.status(500).json({ Error: err.message });

     }
};

module.exports = postCategories;
