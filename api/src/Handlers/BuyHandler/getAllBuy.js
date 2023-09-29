const { Buy, Customer } = require("../../db");

const allBuyUser = async () => {
  try {
    const allBuy = await Buy.findAll({
      include: [
        {
          model: Customer,
          attributes: ['name', 'email'], // Reemplaza con los campos que necesites
        },
      ],
    });

    // console.log("TRAE:", allBuy);

    if (!allBuy.length) return { message: "No hay compras registradas" };

    return allBuy;
  } catch (error) {
    console.error("Error al buscar compras de usuarios:", error);
    throw error;
  }
};

module.exports = allBuyUser;

