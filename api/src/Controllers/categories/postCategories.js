const {Category}=require('../../db');


const createCategory= async ({name})=>{
    const category={
        name:name,
    }
    const newCategory= await Category.create(category);
    return newCategory;
}

module.exports = createCategory;