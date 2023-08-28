const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Drivers', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
  nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido:{
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    imagen:{
      type: DataTypes.STRING,
      allowNull: false
    },
    nacionalidad:{
      type: DataTypes.STRING,
      allowNull: false
    },
    nacimiento:{
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  },{ timestamps: false });
};