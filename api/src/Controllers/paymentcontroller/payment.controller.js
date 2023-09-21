const mercadopago = require("mercadopago");
// Descomenta la siguiente línea si estás utilizando un archivo de configuración
// const { MERCADOPAGO_API_KEY } = require("../config.js");
const axios = require("axios");
const {Buy} = require ("../../db")

exports.createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: `TEST-732264203499224-091212-93394bb9fe841f321b6ccdd7e4fd3b91-139153273`,
  });
  try {
    const result = await mercadopago.preferences.create({
      items: [
        {
          title: "Laptop",
          unit_price: 500000,
          currency_id: "COP",
          quantity: 1,
        },
      ],
      back_urls: {
        // success: "http://localhost:3000/home",
        // pending: "https://e720-190-237-16-208.sa.ngrok.io/pending",
        // failure: "https://e720-190-237-16-208.sa.ngrok.io/failure",
      },
      notification_url: "https://df89-181-235-106-146.ngrok-free.app/mercadoPago/webhook",
    });

    // console.log("RESULTADO:::",result);
    res.json(result.body)

    // res.json({ message: "Payment creted" });
    // res.json(result.body);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};


exports.receiveWebhook = async (req, res) => {
  const transactionId = req.query['data.id'];
  // Verificar si transactionId está vacío
  if (!transactionId) {
    return res.status(400).json({ Error: "Falta el ID de transacción en la consulta." });
  }

  const url = `https://api.mercadopago.com/v1/payments/${transactionId}`;

  try {
    const { data } = await axios.get(url, {
      headers: { authorization: `Bearer TEST-732264203499224-091212-93394bb9fe841f321b6ccdd7e4fd3b91-139153273` },
    });

    const {
      id,
      card,
      description,
      order,
      payment_method,
      transaction_amount,
      external_reference,
    } = data;

    const datosCompra = {
      id: id,
      name: description,
      provider: order.type,
      card: { card, payment_method },
      UserId: external_reference,
      total: transaction_amount,
    };
    console.log("DATOS COMPRA:::", datosCompra);
    
    const createCompra = await Buy.create(datosCompra);
    // Realizar aquí el procesamiento de los datos de la compra según tus necesidades

    // Si todo sale bien, responder con un OK
    return res.status(200).send("OK");
  } catch (error) {
    console.error("Error en el webhook:", error.message);
    res.status(500).json({ Error: error.message });
  }
};

