const { Router } = require('express');
const customerRouter = require('./customerRoutes');
const orderDetailRouter = require("./orderDetailRoutes")

const router = Router();

router.use('/customer', customerRouter);
router.use("/orderDetail",orderDetailRouter)

module.exports = router;
//asdasd