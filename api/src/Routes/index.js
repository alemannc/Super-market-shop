const { Router } = require('express');
const customerRouter = require('./customerRoutes');

const router = Router();

router.use('/customer', customerRouter);

module.exports = router;