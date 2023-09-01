const { getAllTeamsFromDatabase } = require('../controllers/teamsControllers');

const getAllTeamsHandler = async (req, res) => {
    try {
        res.status(200).json(await getAllTeamsFromDatabase());
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllTeamsHandler };
