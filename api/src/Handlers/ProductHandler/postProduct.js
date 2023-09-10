const { Router }  = require("express");

const createProduct = require("../../Controllers/productController/postProduct.js");
const uploadImage = require("../../Config/Cloudinary.js");
const cleaner = require('../../Config/cleaner');
const router = Router();

const postProducto = async (req,res)=>{
  const { name, price, description, stock, brand, expirationdate, categories } = req.body;
   const image = req.files['image[]'].tempFilePath;
   console.log("Request received. Image file path:", image);
  //console.log(req.body)
  try {

       const imageUrl = await uploadImage(image);
       let imageSecureUrl = imageUrl.secure_url;
       if (req.files){
        if (imageSecureUrl){
          cleaner()
        }
       }
       
       const foundCategory = await Category.findOne({
        where: { name: categories },
      });
      
      if (!foundCategory) {
        return res.status(404).json({ Error: `La categoría '${categories}' no fue encontrada.` });
      } else {
         category = foundCategory.id;
      }

      const newProducto = await createProduct(
        name,
        price,
        description,
        imageSecureUrl,
        stock,
        brand,
        expirationdate,
        category,
      );
  
      res.status(201).json(newProducto);
    } catch (error) {
      if (error.status === 404) {
        res.status(404).json({ Error: error.message });
      } else {
        res.status(500).json({ Error: error.message });
      }
    }
  };
  
  module.exports = postProducto;