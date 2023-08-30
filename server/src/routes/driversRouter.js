const { Router } = require("express");
const driversRouter = Router();
const { getAllDriversHandler, getDriverByIdHandler, createDriverHandler } = require('../handlers/driversHandlers')

const validate = (req, res, next) => {
    const { nombre, apellido, descripcion, imagen, nacionalidad, nacimiento, teams } = req.body;
    if ( !nombre || !apellido || !descripcion  || !nacionalidad ||!nacimiento ||!teams ) res.status(400).json({error: 'Por favor complete todos los campos'})
    next();
}


driversRouter.get('/', getAllDriversHandler);   //TERMINADO

driversRouter.get('/:id', getDriverByIdHandler);    //FALTA RELACIONz

driversRouter.post('/', validate, createDriverHandler);    //FALTA RELACION

module.exports = driversRouter;