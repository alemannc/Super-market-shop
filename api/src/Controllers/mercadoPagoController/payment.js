import mercadopago from "mercadopago"


export const createOrder= async(req, res)=>{
    const {customerID,price} = req.body

    mercadopago.configure({
        access_token:"TEST-4254155066905613-083117-bed830b094008bd4ea7785ee1a810bd3-1466908614"
    })
    
   const result= await mercadopago.preferences.create({
        items:[{
            title:customerID,
            unit_price: price,
            currency_id:"ARS",
            quantity:1,
        }]
    })
}