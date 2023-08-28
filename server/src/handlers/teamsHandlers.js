/* const axios = require('axios');
const { Team } = require('../db');
const URL = 'http://localhost:5000/drivers';

const getAllTeamsHandler  = async (req, res) => {
    try {
        const dbTeams = await Team.findAll();
        if (!dbTeams.length) {
            const apiDrivers = (await axios.get(URL)).data;
            
            const uniqueTeams = new Set();
            driversFromApi.forEach(driver => {
                const teams = driver.teams.split(', ');
                teams.forEach(team => uniqueTeams.add(team));
            });
            const teamsToSave = Array.from(uniqueTeams).map(team => ({ name: team }));
            await Team.bulkCreate(teamsToSave);

            res.status(200).json(teamsToSave);
            } else {
                res.status(200).json(dbTeams);
            }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los equipos' });
    }
};

module.exports = getAllTeamsHandler; */