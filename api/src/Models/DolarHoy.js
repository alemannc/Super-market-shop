const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("DolarHoy",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        primaryKey: true,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      dateToday: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    },
    {
      timestamps: false, // Desactivar timestamps
    }
  );
};
