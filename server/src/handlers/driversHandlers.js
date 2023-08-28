const {getAllDrivers, getDriverById, getDriverByName, createDriver} = require('../controllers/driversControllers')

const getAllDriversHandler = async (req, res) => {
    const {name} = req.query;
    name ? res.status(200).json(await getDriverByName(name))
    : res.status(200).json(await getAllDrivers());

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
        const {nombre, apellido, descripcion, imagen, nacionalidad, nacimiento} = req.body;
        const newDriver = await createDriver(nombre, apellido, descripcion, imagen, nacionalidad, nacimiento)   
        res.status(201).json(newDriver)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = { getAllDriversHandler, getDriverByIdHandler, createDriverHandler }