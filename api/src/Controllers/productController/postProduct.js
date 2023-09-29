const { Product } = require("../../db");

// const createProducto = async ( name, price, description, image, stock, brand, expirationdate, categories ) => {
// const newProduct = await Product.create({ name, price, description, image, stock, brand, expirationdate, categories });  
// return newProduct;
// };

// module.exports = createProducto;


const createProduct = async (name, price, description, imageSecureUrl, stock, brand, expirationdate, categories) => {

      // Crea el producto con la URL de la imagen
  const newProduct = await Product.create({
        name,
        price,
        description,
        image: imageSecureUrl, 
        stock,
        brand,
        expirationdate,
  });

  await newProduct.setCategories(categories);


  return newProduct;
};

 module.exports = createProduct;