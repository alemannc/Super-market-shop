const { Router } = require('express');
const customerRouter = require('./customerRoutes');
const orderDetailRouter = require("./orderDetailRoutes")
const productRoutes = require("./productRoutes")

const router = Router();

router.use('/customer', customerRouter);
router.use("/orderDetail",orderDetailRouter)
router.use("/product", productRoutes);



module.exports = router;
//asdasd


 