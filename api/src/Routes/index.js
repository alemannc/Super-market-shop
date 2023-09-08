const { Router } = require('express');
const customerRouter = require('./customerRoutes');
const mercadoPagoRouter = require("./mercadoPagoRoutes")
const productRoutes = require("./productRoutes");
const ordersRouter = require("./ordersRouter")

const router = Router();

router.use('/customer', customerRouter);
router.use("/orders",ordersRouter);
router.use("/product", productRoutes);
router.use("/mercadoPago", mercadoPagoRouter)




module.exports = router;
