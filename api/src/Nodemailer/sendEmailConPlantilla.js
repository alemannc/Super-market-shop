const transporter = require("../Nodemailer/postEmail.js");


const sendEmailConPlantilla = (to, template, data) => {

let emailOptions;
    switch(template) {
        case "newCustomer": 
         emailOptions = {
            from: "supermarketshopp72@gmail.com",
            to,
            subject: "Bienvenido a Supermarket Shopp",
            html: 
          `<h1> Bienvenido a tu supermercado digital! </h1>.<p>¡ En nuestro sitio web, te ofrecemos una experiencia de compra conveniente y fácil desde la comodidad de tu hogar. Aquí encontrarás una amplia variedad de productos de calidad, desde alimentos frescos hasta artículos para el hogar y productos de cuidado personal.

          Nuestro objetivo es brindarte un servicio excepcional y satisfacer todas tus necesidades. Con solo unos clics, podrás explorar nuestro catálogo, realizar pedidos y recibir tus productos directamente en tu puerta. Además, contamos con un sistema de pago seguro y opciones de entrega flexibles para adaptarnos a tu horario. .`         
        };
          break; 
          default:
            emailOptions = {
              from: "timeOut",
              to,
              subject: "Prueba de envio de mensajes",
              html: "<h1> Esto es un mensaje de prueba</h1>",
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