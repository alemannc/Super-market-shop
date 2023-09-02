const { Router } = require('express');
const customerRouter = require('./customerRoutes');
const orderDetailRouter = require("./orderDetailRoutes")

const productRoutes = require("./productRoutes");
const getallProducts = require('./productRoutes');



const ordersRouter = require("./ordersRouter")



const router = Router();

router.use('/customer', customerRouter);
router.use("/orderDetail",orderDetailRouter)
router.use("/orders",ordersRouter);

router.use("/product", productRoutes);
router.use("/getallProducts", getallProducts );




module.exports = router;
