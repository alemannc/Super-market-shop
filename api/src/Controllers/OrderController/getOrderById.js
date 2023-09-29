
const { Buy, Customer } = require('../../db');

const getOrderById = async (id) => {
    try {
        const OrderById = await Buy.findOne({
            where: { id: id },
            include: { model: Customer, attributes: ['name', 'email'] }
        });

        if (OrderById) {
            return OrderById;
        } else {
            throw new Error("No existe una orden con ese ID");
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// const getOrderById= async (id)=>{

//     // console.log(id);
//    try {
//     //    const OrderById = await Buy.findByPk(id);
//        const OrderById = await Buy.findOne({ where: { id: id } });
//        // , { include: { model: Customer, attributes: ['name'] }, });
//     //    console.log(OrderById);
   
//        if(OrderById){
//            return OrderById;
//        }else{
//            new Error( "there is no order with that id");
//        }
//    } catch (error) {
//         console.log(error);
//    }
// }


module.exports = getOrderById; 
