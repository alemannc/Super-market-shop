const { Router } = require('express');
const customerRouter = require('./customerRoutes');
const orderDetailRouter = require("./orderDetailRoutes")
const ordersRouter = require("./ordersRouter")

const router = Router();

router.use('/customer', customerRouter);
router.use("/orderDetail",orderDetailRouter)
router.use("/orders",ordersRouter);

module.exports = router;
