const {getAllDrivers, getDriverById, getDriversByName, createDriver} = require('../controllers/driversControllers')

const getDriversHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const drivers = await getDriversByName(name);
            drivers.length ? res.status(200).json(drivers)
            :  res.status(404).json({ message:'No hay conductor con ese nombre'});
        } else {
            res.status(200).json(await getAllDrivers());
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}; 

const getDriverByIdHandler = async (req, res) => {
    const {id} = req.params;
    const source = isNaN(id) ? 'DB' : 'API'
    try {
        const driverById = await getDriverById(id, source)
        driverById ? res.status(200).json(driverById)
        : res.status(400).json({message: 'No hay conductor con ese id'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};


const createDriverHandler = async (req, res) => {
    try {
        const { name, surname, description, image, nationality, dob, teams } = req.body;
        res.status(201).json(await createDriver( name, surname, description, image, nationality, dob, teams));
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getDriversHandler, getDriverByIdHandler, createDriverHandler } 