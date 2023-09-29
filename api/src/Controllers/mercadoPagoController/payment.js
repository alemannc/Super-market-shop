// const mercadopago = require("mercadopago");
// const { MERCADOPAGO_API_KEY } = require("../config.js"); // Descomenta esta línea si estás utilizando un archivo de configuración
// const  useState = require ( 'react');


// function createOrder() {
//   // Mover la función createPreference dentro del componente
//   const [preferenceId, setPreferenceId] = useState(null);
//     const [successMessage, setSuccessMessage] = useState('');
//     const [isPreferenceGenerated, setIsPreferenceGenerated] = useState(false);

//   const createPreference = async () => {
//     try {
//       const response = await axios.post(
//         'https://api.mercadopago.com/checkout/preferences',
//         {
//           items: [
//             {
//               title: 'Pago Supermarket shop',
//               unit_price: totalCartPrice,
//               quantity: 1,
//               currency_id: 'COP'
//             },
//           ],
//           back_urls: {
//             success: "https://supermarket-git-producarrito-matiasivanm.vercel.app/home",
//             failure: "https://supermarket-git-producarrito-matiasivanm.vercel.app/home",
//             pending: ""
//           },
//           auto_return: "approved",
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer TEST-732264203499224-091212-93394bb9fe841f321b6ccdd7e4fd3b91-139153273`,
//           },
//         }
//       );

//       setPreferenceId(response.data.id);
//       setIsPreferenceGenerated(true);
//       setSuccessMessage('');
//     } catch (error) {
//       console.error('Error al crear la preferencia: ', error);
//     }
//   };

  // Aquí tu lógica para crear la orden de MercadoPago

//   exports.receiveWebhook = async (req, res) => {
//     try {
//       const payment = req.query;
//       console.log(payment);
//       if (payment.type === "payment") {
//         const data = await mercadopago.payment.findById(payment["data.id"]);
//         console.log(data);
//       }

//       res.sendStatus(204);
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ message: "Something goes wrong" });
//     }
//   };
// }

// module.exports = createOrder;
