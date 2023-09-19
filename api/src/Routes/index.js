const { Router } = require('express');
const customerRouter = require('./customerRoutes');
const mercadoPagoRouter = require("./mercadoPagoRoutes")
const productRouter = require("./productRoutes");
const ordersRouter = require("./ordersRouter")
const shoppingCartRouter= require ("./shoppingCart")
const categoriesRouter = require('./categoriesRoutes');
const commentRouter = require("./commetRoutes.js");

const router = Router();

router.use('/customer', customerRouter);
router.use("/orders",ordersRouter);
router.use("/product", productRouter);
router.use("/mercadoPago", mercadoPagoRouter)
router.use("/shoppingCart", shoppingCartRouter)
router.use('/category', categoriesRouter);
router.use('/comment', commentRouter);



module.exports = router;
