const { Router } =require("express");
const handlerProducto = require("../Handllers/handlerProducto");
const router = Router();

router.use("/producto", handlerProducto);


module.exports = router;
 
