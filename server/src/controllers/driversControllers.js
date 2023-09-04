const { Drivers, Teams } = require('../db');
const axios = require('axios');
const URL = 'http://localhost:5000/drivers';
//const { Op } = require('sequelize');

const formatAPI = (api) => 
    api.map(({id, name, description, image, nationality, dob, teams}) => ({
        id,
        name: name.forename,
        surname: name.surname,
        description,
        image: image.url || 'https://i.pinimg.com/originals/37/68/44/3768447b2024222d9e90c203e96c9328.jpg',
        nationality,
        dob,
        teams
}));


const formatDB = (bd) => 
    bd.map(driver => ({
        ...driver.dataValues,                                             //prop de Seq - trae los valores
        Teams: driver.Teams.map(team => team.nombre).join(', ')
}));



const getAllDrivers = async () => {
    const dbDrivers = formatDB(await Drivers.findAll({include: Teams}));
    const apiDrivers = formatAPI((await axios.get(URL)).data);
    return [...dbDrivers, ...apiDrivers]
}



/*const getDriversByName = async (name) => {
    const dbDriversWithName = formatDB(await Drivers.findAll({where: name ? { nombre: { [Op.iLike]: `%${name}%` }} : {}, include: Teams}));
    const apiDrivers = cleanArray((await axios.get(URL)).data);
    const apiDriversWithName = apiDrivers.filter((user) => user.nombre.toLowerCase().includes(name.toLowerCase())); 
    return [...dbDriversWithName, ...apiDriversWithName].slice(0,15)
};*/

const getDriversByName = async (name) => {
    const allDrivers = await getAllDrivers() 
    const allWithName = allDrivers.filter((driver) => driver.name.toLowerCase().includes(name.toLowerCase()))
    return [...allWithName].slice(0,15)
};



/* const getDriverById = async (id, source) => {
    const driver = source === 'API' 
        ? formatAPI((await axios.get(`${URL}/${id}`)).data) 
        : formatDB([await Drivers.findByPk(id, {include: Teams})]);
    return driver;
};  */

const getDriverById = async (id, source) => {
    const allDrivers = await getAllDrivers();
    const driverById = source === 'API' 
        ? allDrivers.find((driver) => driver.id === +id)
        : allDrivers.find((driver) => driver.id === id)
    return driverById;
};



const createDriver = async (name, surname, description, image, nationality, dob, teams) => {
    const newDriver = await Drivers.create({name, surname, description, image, nationality, dob});
    let teamsAsociados = [];
    if (teams) {
        teamsAsociados = await Teams.findAll({ where: { nombre: teams } });
        await newDriver.setTeams(teamsAsociados);
    }
    return {
        ...newDriver.dataValues,
        Teams: teamsAsociados.map(team => team.nombre)
    }
};



module.exports = { getAllDrivers, getDriverById, getDriversByName, createDriver }