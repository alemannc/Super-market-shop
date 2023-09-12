const express = require('express');
const categoryRouter = express.Router();

const getAllCategories = require('../Handlers/CategoriesHandler/allCategory');
const byNameCategories = require('../Handlers/CategoriesHandler/ByNameCategory');
const byIdCategories = require ('../Handlers/CategoriesHandler/ByIdCategories');
const postCategories = require ('../Handlers/CategoriesHandler/PostCategory');

categoryRouter.get('/', (req, res) => {
    getAllCategories(req, res);
});

categoryRouter.get('/name', (req, res) => {
    byNameCategories(req, res);
});

categoryRouter.get('/:id', (req, res)=>{
    byIdCategories(req, res);
});


categoryRouter.post('/', (req, res) => {
    postCategories(req, res);

});



module.exports = categoryRouter;