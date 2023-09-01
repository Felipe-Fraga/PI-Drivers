const { Router } = require("express");
const driversRouter = Router();
const { getDriversHandler, getDriverByIdHandler, createDriverHandler } = require('../handlers/driversHandlers')

const validate = (req, res, next) => {
    const { name, surname, description, nationality, dob, teams } = req.body;
    if (!name || !surname || !description || !nationality || !dob || !teams || teams === '') {
        res.status(400).json({ error: 'Por favor complete todos los campos' });
    } else {
        next();
    }
};

driversRouter.get('/', getDriversHandler);   
driversRouter.get('/:id', getDriverByIdHandler);    
driversRouter.post('/', validate, createDriverHandler);    

module.exports = driversRouter;