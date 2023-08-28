//En base a este nacen otras rutas

const { Router } = require("express");
const router = Router();
const driversRouter = require('./driversRouter');
const teamsRouter = require('./teamsRouter');

router.use('/drivers', driversRouter);
router.use('/teams', teamsRouter);

module.exports = router;
