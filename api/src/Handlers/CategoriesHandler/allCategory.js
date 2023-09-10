const getAllCategories = require ('../../Controllers/categories/Allcategories');

const getAll = async (req, res) => {
    try {
      const categories = await getAllCategories();
      res.status(200).json(categories);
      
    } catch (err) {
        if (err.status === 404) {
        res.status(404).json({ Error: err.message });
      } else {
        res.status(500).json({ Error: err.message });
      }
    }
  };

  module.exports = getAll;
  