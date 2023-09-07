const mercadopago = require("mercadopago");


const createOrderMP = async (req,res)=>{
    
    mercadopago.configure({
      access_token: "TEST-7448806304476546-090112-310996ac27e0fcc280c6453e355e53f9-1465680871",
    });
    
      let preference = {
        items: [
          {
            title: req.body.name,
            unit_price: Number(req.body.price),
            quantity: 1,
            currency_id: "ARS",
          },
        ],
        back_urls: {
          success: "http://localhost:3001/home",
          failure: "http://localhost:3001/home",
          pending: "",
        },
        auto_return: "approved",
      };
      await mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.status(200).json({
          id: response.body.id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    
}

module.exports= createOrderMP



