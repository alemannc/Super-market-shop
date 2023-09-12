const { Customer } = require('../../db');
const { Op } = require('sequelize');

const findByEmail = async (email) => {
  const byEmail = await Customer.findAll({
    where: {
      email: {
        [Op.iLike]: `%${email}%`
      }
    },
  });

  if (byEmail.length < 0) {
    throw new Error('User not found');
  }

  return byEmail;
};

module.exports = findByEmail;