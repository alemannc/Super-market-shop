const createProduct = require("../../Controllers/productController/postProduct.js");
const uploadImage = require("../../Config/Cloudinary.js");
const cleaner = require('../../Config/cleaner');
const { Category } = require('../../db.js');


const postProducto = async (req,res)=>{
  const { name, price, description, stock, brand, expirationdate, categories } = req.body;
    console.log("🚀 ~ file: postProduct.js:11 ~ postProducto ~ req.body:", req.body)
     const image = req.files['image[]'].tempFilePath;
    // const image = req.files.image.tempFilePath;
    console.log("🚀 ~ file: postProduct.js:12 ~ postProducto ~ image:", image)

  try {

       const imageUrl = await uploadImage(image);
       let imageSecureUrl = imageUrl.secure_url;
       if (req.files){
        if (imageSecureUrl){
          cleaner()
        }
       }
       
      //  const foundCategory = await Category.findOne({
      //   where: { name: categories },
      // });
  
      // if (!foundCategory) {
      //   return res.status(404).json({ Error: `La categoría '${categories}' no fue encontrada.` });
      // }
  
      const newProducto = await createProduct(
        name,
        price,
        description,
        imageSecureUrl,
        stock,
        brand,
        expirationdate,
        categories
        // foundCategory // Asociamos el producto con la categoría encontrada
      );
      
  
  
      res.status(201).json(newProducto);
      console.log("🚀 ~ file: postProduct.js:46 ~ postProducto ~ newProducto:", newProducto)
    } catch (error) {
        res.status(404).json({ Error: error.message }) || res.status(500).json({ Error: error.message }); 
    }
  };
  
  module.exports = postProducto;