// const { Product } = require("../../db");

// const createProducto = async ( name, price, description, image, stock, brand, expirationdate, categories ) => {
// const newProduct = await Product.create({ name, price, description, image, stock, brand, expirationdate, categories });  
// return newProduct;
// };

// module.exports = createProducto;


const createProducto = async (name, price, description, imageFile, stock, brand, expirationdate, categories) => {
   
        // Llama a la función uploadImage para cargar la imagen en Cloudinary
    const cloudinaryResponse = await uploadImage(imageFile.path); // Suponiendo que `imageFile` es un objeto con la propiedad `path`
    
        // Obtén la URL de la imagen cargada en Cloudinary
     const imageUrl = cloudinaryResponse.secure_url;
    
        // Crea el producto con la URL de la imagen
    const newProduct = await Product.create({
          name,
          price,
          description,
          image: imageUrl, // Guarda la URL de la imagen en la base de datos en lugar del archivo local
          stock,
          brand,
          expirationdate,
          categories,
    });
    
    return newProduct;
 };