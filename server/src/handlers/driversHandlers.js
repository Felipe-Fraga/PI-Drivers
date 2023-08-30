const {getAllDrivers, getDriverById, getDriversByName, createDriver} = require('../controllers/driversControllers')
const { Teams } = require('../db');

const getAllDriversHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const drivers = await getDriversByName(name);
            drivers.length ? res.status(200).json(drivers)
            :  res.status(404).json({ message: 'No hay ningún conductor' });
        } else {
            res.status(200).json(await getAllDrivers());
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 

const getDriverByIdHandler = async (req, res) => {
    const {id} = req.params;
    const source = isNaN(id) ? 'DB' : 'API'
    try {
        const driverById = await getDriverById(id, source);
        res.status(200).json(driverById)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};


const createDriverHandler = async (req, res) => {
    try {
        const {nombre, apellido, descripcion, imagen, nacionalidad, nacimiento, teams} = req.body;
        const teamsArray = Array.isArray(teams) ? teams : [teams];
        const newDriver = await createDriver(nombre, apellido, descripcion, imagen, nacionalidad, nacimiento)   
        if (teams && teams.length > 0){
            const teamInstances = await Teams.findAll({ where: { nombre: teamsArray } });
            await newDriver.setTeams(teamInstances);
        }
        const driverWithTeams = await getDriverById(newDriver.id, 'DB');
        res.status(201).json(driverWithTeams)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = { getAllDriversHandler, getDriverByIdHandler, createDriverHandler } 