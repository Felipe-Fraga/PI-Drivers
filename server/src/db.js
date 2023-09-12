require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const fs = require('fs');
const path = require('path');


//Creo instancia y comunico DB
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`, {logging: false, native: false})                               //desactivar consultas de la consola, y hacerlas compatibles con distintas bd

//Carga y define los modelos
const basename = path.basename(__filename);                                            //archivo actual en basename
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '/models'))                                            //lee sincrónico /models
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')) 
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  }); 

modelDefiners.forEach(model => model(sequelize)); 


//Los pasa a mayúsculas
let entries = Object.entries(sequelize.models);                                                 //crea obj key:value
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries); 


//Destructuro los modelos y los relaciono
const { Drivers, Teams } = sequelize.models;  
Drivers.belongsToMany(Teams, {through: 'drivers_teams'});
Teams.belongsToMany(Drivers, {through: 'drivers_teams'})



module.exports = {...sequelize.models, conn: sequelize};