const mercadopago = require("mercadopago")


const createOrder= async(req, res)=>{
    

     mercadopago.configure({
        access_token:"TEST-7448806304476546-090112-310996ac27e0fcc280c6453e355e53f9-1465680871"
    })
    
   const result= await mercadopago.preferences.create({
        items:[{
            title:"pollo",
            unit_price: 1500,
            currency_id:"ARS",
            quantity:1,
        }]
    })

    return result
}


module.export=createOrder;