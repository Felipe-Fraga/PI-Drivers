const { Router } = require("express");
const router = Router();
const driversRouter = require('./driversRouter');
const teamsRouter = require('./teamsRouter');
const { getAllTeamsFromAPI, saveTeamsToDatabase } = require('../controllers/teamsControllers'); 

router.use(async (req, res, next) => {
    try {
        await saveTeamsToDatabase(await getAllTeamsFromAPI());
        next(); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.use('/drivers', driversRouter);
router.use('/teams', teamsRouter);

module.exports = router;
