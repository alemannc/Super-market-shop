const transporter = require("../Nodemailer/postEmail.js");
const pdfkit = require("pdfkit");
const fs = require("fs");

const sendEmailConPlantilla = (to, template, data) => {
  let emailOptions;
  console.log("DATA::", data)
  switch (template) {
    case "newCustomer":
      emailOptions = {
        from: "supermarketshopp72@gmail.com",
        to,
        subject: "¡Bienvenido a Supermarket Shopp!",
        html: `
          <h1>¡Bienvenido a tu supermercado digital!</h1>
          <p>En nuestro sitio web, te ofrecemos una experiencia de compra conveniente y fácil desde la comodidad de tu hogar. Aquí encontrarás una amplia variedad de productos de calidad, desde alimentos frescos hasta artículos para el hogar y productos de cuidado personal.</p>

          <p>Nuestro objetivo es brindarte un servicio excepcional y satisfacer todas tus necesidades. Con solo unos clics, podrás explorar nuestro catálogo, realizar pedidos y recibir tus productos directamente en tu puerta. Además, contamos con un sistema de pago seguro y opciones de entrega flexibles para adaptarnos a tu horario.</p>
        `,
      };
      break;
    case "approved":
      // Plantilla para pedidos aprobados
      const totalAmount = data.cart.reduce((total, product) => total + product.unit_price * product.quantity, 0); // Calcula el valor total del pedido

      const pdfFileName = "pedido_aprobado.pdf";
      const pdfStream = fs.createWriteStream(pdfFileName);
      const pdfDoc = new pdfkit();
      pdfDoc.pipe(pdfStream);

      // Agrega contenido al PDF (puedes personalizar esto según tus necesidades)
      pdfDoc.text("Pedido Aprobado", { fontSize: 18 });
      pdfDoc.text(`Número de Orden: ${data.id}`);
      pdfDoc.text("Detalles del Pedido:");
      data.cart.forEach((product) => {
        pdfDoc.text(`${product.title}`);
        pdfDoc.text(`Descripción: ${product.description}`);
        pdfDoc.text(`Cantidad: ${product.quantity}`);
        pdfDoc.text(`Precio Unitario: $${product.unit_price}`);
        pdfDoc.text(`Precio Total: $${product.unit_price * product.quantity}`);
        pdfDoc.text(""); // Espacio en blanco entre productos
      });
      pdfDoc.text(`Valor Total del Pedido: $${totalAmount}`);

      // Finaliza el PDF
      pdfDoc.end()

      emailOptions = {
        from: "supermarketshopp72@gmail.com",
        to,
        subject: "Tu pedido de Supermarket Shopp ha sido aprobado",
        html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          /* Estilos CSS para el correo aquí */
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
          }
          .header {
            text-align: center;
          }
          .logo {
            max-width: 100px;
          }
          .content {
            background-color: #fff;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          /* Estilos específicos para esta plantilla */
          h1 {
            color: #333;
            font-size: 24px;
          }
          p {
            color: #666;
            font-size: 16px;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            margin-bottom: 10px;
          }
          /* Estilos para la factura */
          .invoice {
            margin-top: 20px;
            background-color: #f9f9f9;
            padding: 10px;
          }
          .invoice h2 {
            font-size: 18px;
            color: #333;
          }
          .invoice p {
            font-size: 14px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img class="logo" src="../Nodemailer/logo.png" alt="Supermarket Shopp Logo">
            <h1>¡Tu pedido ha sido aprobado!</h1>
          </div>
          <div class="content">
            <h1>Felicidades, tu pedido ha sido aprobado</h1>
            <p>Estamos emocionados de informarte que tu pedido ha sido pagado con éxito y está en proceso de preparación. Pronto te lo enviaremos a la dirección que proporcionaste durante la compra.</p>
            <p>Detalles de tu pedido:</p>
            N° de orden: ${data.id}
            <ul>
              ${data.cart.map((product) => `
                <li>
                  <strong>${product.title}</strong><br>
                  Descripción: ${product.description}<br>
                  Cantidad: ${product.quantity}<br>
                  Precio unitario: $ ${product.unit_price}<br>
                  Precio total: $ ${product.unit_price * product.quantity}
                </li>
              `).join("")}
            </ul>
            <div class="invoice">
              <h2>Factura</h2>
              <p>Valor total del pedido: $ ${totalAmount}</p>
            </div>
            <p>Gracias por confiar en Supermarket Shopp. Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
          </div>
        </div>
      </body>
      </html>
    `,
        attachments: [
          {
            filename: pdfFileName,
            content: fs.createReadStream(pdfFileName),
          },
        ],
      };
      break;
    case "orderRejected":
      emailOptions = {
        from: "supermarketshopp72@gmail.com",
        to,
        subject: "Tu pedido ha sido rechazado debido a problemas con la tarjeta",
        html: `
          <h1>Tu pedido ha sido rechazado</h1>
          <p>Lamentamos informarte que tu pedido ha sido rechazado debido a problemas con la tarjeta de crédito/débito proporcionada. Te recomendamos verificar los detalles de la tarjeta y volver a intentar realizar el pedido.</p>

          <p>Si sigues teniendo problemas, no dudes en ponerte en contacto con nuestro equipo de soporte para obtener ayuda.</p>
        `,
      };
      break;
    default:
      emailOptions = {
        from: "timeOut",
        to,
        subject: "Prueba de envío de mensajes",
        html: "<h1>Esto es un mensaje de prueba</h1>",
      };
      break;
  }
  transporter.sendMail(emailOptions, (error, info) => {
    if (error) {
      console.log("Email error: ", error.message);
    } else {
      console.log("Correo enviado correctamente 📧");
    }
  });
};

module.exports = sendEmailConPlantilla;
