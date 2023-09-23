const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expirationdate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      // categories: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },

     available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },  
      discount: {
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 0
      }
    },
    {
      timestamps: false, // Desactivar timestamps
    }
  );
};
