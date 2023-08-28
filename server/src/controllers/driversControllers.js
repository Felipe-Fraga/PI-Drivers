const { Drivers } = require('../db');
const axios = require('axios');
const URL = 'http://localhost:5000/drivers'

const cleanArray = (arr) => 
    arr.map(elem => {
        return {
            id: elem.id,
            nombre: elem.name.forename,
            apellido: elem.name.surname,
            descripcion: elem.description,
            imagen: elem.image.url,
            nacionalidad: elem.nationality,
            nacimiento: elem.dob
        }
    });


const getAllDrivers = async () => {
    const dbDrivers = await Drivers.findAll();
    const apiDriversInitial = (await axios.get(URL)).data;
    const apiDrivers = cleanArray(apiDriversInitial)
    return [...dbDrivers, ...apiDrivers]
}

const getDriverByName = async (name) => {
    const dbDrivers = await Drivers.findAll({where: {nombre: name}});
    const apiDriversInitial = (await axios.get(URL)).data;
    const apiDrivers = cleanArray(apiDriversInitial);
    const filteredDrivers = apiDrivers.filter((user) => user.nombre === name);
    return [...dbDrivers, ...filteredDrivers]
};

const getDriverById = async (id, source) => {
    const driver = source === 'API' ? (await axios.get(`${URL}/${id}`)).data : await Drivers.findByPk(id);
    return driver;
};


const createDriver = async (nombre, apellido, descripcion, imagen, nacionalidad, nacimiento) =>  
    await Drivers.create({nombre, apellido, descripcion, imagen, nacionalidad, nacimiento}); //Me da una promesa

module.exports = { getAllDrivers, getDriverById, getDriverByName, createDriver }