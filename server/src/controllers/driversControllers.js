const { Drivers, Teams } = require('../db');
const axios = require('axios');
const URL = 'http://localhost:5000/drivers'
const { Op } = require('sequelize');

const cleanArray = (arr) => 
    arr.map(elem => cleanObj(elem));

const cleanObj = (elem) => {
    return {
        id: elem.id,
        nombre: elem.name.forename,
        apellido: elem.name.surname,
        descripcion: elem.description,
        imagen:  elem.image.url || 'https://flourishportal.blogspot.com/2021/08/formula-1-wikipedia.html',
        nacionalidad: elem.nationality,
        nacimiento: elem.dob,
        teams: elem.teams
    }
}

const getAllDrivers = async () => {
    const dbDrivers = await Drivers.findAll({include: Teams});
    const apiDrivers = cleanArray((await axios.get(URL)).data);
    return [...dbDrivers, ...apiDrivers]
}

const getDriversByName = async (name) => {
    const dbDrivers = await Drivers.findAll({where: { nombre: { [Op.iLike]: `%${name}%` }}});
    const apiDrivers = cleanArray((await axios.get(URL)).data);
    const filteredDrivers = apiDrivers.filter((user) => user.nombre.toLowerCase().includes(name.toLowerCase()));
    return [...dbDrivers, ...filteredDrivers].slice(0,15)
};

const getDriverById = async (id, source) => {
    const driver = source === 'API' ? cleanObj((await axios.get(`${URL}/${id}`)).data) 
    : await Drivers.findByPk(id, {include: Teams});
    return driver;
}; 


const createDriver = async (nombre, apellido, descripcion, imagen, nacionalidad, nacimiento) =>  
    await Drivers.create({nombre, apellido, descripcion, imagen, nacionalidad, nacimiento}); //Me da una promesa

module.exports = { getAllDrivers, getDriverById, getDriversByName, createDriver }