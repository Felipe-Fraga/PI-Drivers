const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Drivers', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING
    },
    nationality:{
      type: DataTypes.STRING,
      allowNull: false
    },
    dob:{
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  },{ timestamps: false });
};