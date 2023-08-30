const { Order } = require('../../db');


const getAllOrders = async() =>{
    const allOrders= await Order.findAll();
    //console.log("🚀 ~ file: getAllOrders.js:6 ~ getAllOrders ~ allOrders: CONTROLLER", allOrders)

     return allOrders;     
}; 


module.exports = getAllOrders;