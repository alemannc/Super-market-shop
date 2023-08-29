const { Router }  = require("express");

const createProducto = require("../Controllers/createProducto")
const router = Router();

router.post("/", async (req, res) => {
    try {
      const { nombre, precio, descripcion, imagen, inventario, marca, vencimiento, categoria } = req.body;
  //console.log(req.body)
      const newProducto = await createProducto(
        nombre,
        precio,
        descripcion,
        imagen,
        inventario,
        marca,
        vencimiento,
        categoria
      );
  
      res.status(201).json(newProducto);
    } catch (error) {
      if (error.status === 404) {
        res.status(404).json({ Error: error.message });
      } else {
        res.status(500).json({ Error: error.message });
      }
    }
  });
  
  module.exports = router;