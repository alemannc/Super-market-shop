const { Product,Category } = require("../../db");

const getallProduct = async () => {
    const productFind= await Product.findAll({
        include:{
            model: Category,
            attributes: ['name'],
            through:{
              attributes:[]
            }
          }

    });
    if(productFind.length>0){
    return productFind;
    }else{
        return []
    }
};


module.exports = getallProduct;