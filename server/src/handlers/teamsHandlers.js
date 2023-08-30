const { getAllTeamsFromAPI, saveTeamsToDatabase, getAllTeamsFromDatabase } = require('../controllers/teamsControllers');

const getAllTeamsHandler = async (req, res) => {
    try {
        const teams = await getAllTeamsFromDatabase();
        if (teams.length === 0) {
            const teamsFromAPI = await getAllTeamsFromAPI();
            await saveTeamsToDatabase(teamsFromAPI);
            res.status(200).json(teamsFromAPI);
        } else {
            res.status(200).json(teams);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllTeamsHandler };
