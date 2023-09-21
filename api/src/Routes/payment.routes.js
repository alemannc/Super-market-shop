const { Router } = require("express");
const {  createOrder} = require( "../Controllers/paymentcontroller/payment.controller");
const {receiveWebhook} = require( "../Controllers/paymentcontroller/payment.controller");

const router = Router();

router.post("/create-order", createOrder);

router.post("/webhook", receiveWebhook);

router.get("/success", (req, res) => res.send("Success"));

module.exports = router;