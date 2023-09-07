const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('order', {
        Id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false,
        },
      // customerID: {
         //   type: DataTypes.UUID,
           // allowNull: true,
          //  references: {
               // model: 'Customer',
             //   key: 'customerID',
           // }
       // },
        orderDetail: {
            type: DataTypes.JSON,
            allowNull: false, 
        },
        orderAdress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
         //   references: {
           //     model: 'Customer',
             //   key: 'email',
           // }
        },
        oderDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        orderStatus: {
            type: DataTypes.ENUM,
            values: ["Pendiente", "Aprobado", "Cancelado", "Rechazado", "Entregado","En Proceso"],
            defaultValue: "Pendiente",
        },


    },{ timestamps: false });
};

