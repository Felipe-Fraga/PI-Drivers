const { Router } = require("express");
const driversRouter = Router();
const { getAllDriversHandler, getDriverByIdHandler, createDriverHandler } = require('../handlers/driversHandlers')

driversRouter.get('/', getAllDriversHandler);

driversRouter.get('/:id', getDriverByIdHandler);

driversRouter.post('/', createDriverHandler)

module.exports = driversRouter;