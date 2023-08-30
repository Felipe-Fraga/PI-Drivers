const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Teams', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, { timestamps: false })
}