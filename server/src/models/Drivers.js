const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid'); //  Para que mis ids sean distintos que los de la API

module.exports = (sequelize) => {
  sequelize.define('Drivers', {
    id:{
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
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
    descripción:{
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
  });
};