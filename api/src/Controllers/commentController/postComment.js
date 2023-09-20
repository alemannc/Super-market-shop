const { Comment,Customer,Product } = require("../../db.js");

const createComment = async (content, calification,idCustomer,idProduct) => {

  const customer = await Customer.findByPk(idCustomer);
  const product = await Product.findByPk(idProduct);
  

  if(customer && product){
    const newComment = await Comment.create({
      content: content,
      calification: calification,
      customerId:idCustomer,
      productId:idProduct
    });
  
  
    return newComment;

  }else{
    throw new Error("the product or customer missing") ;
}

};

module.exports = createComment;