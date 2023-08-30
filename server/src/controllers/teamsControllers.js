const { Teams } = require('../db');
const axios = require('axios');
const URL = 'http://localhost:5000/drivers';

const getAllTeamsFromAPI = async () => {
    const drivers = (await axios.get(URL)).data;
    const teamsSet = new Set();

    drivers.forEach(driver => {
        if (driver.teams) {
            const driverTeams = driver.teams.split(',');
            driverTeams.forEach(team => teamsSet.add(team));
        }
    });

    return Array.from(teamsSet).map(team => team.trim());
};

//GUARDAR EQUIPOS EN DB
const saveTeamsToDatabase = async (teams) => {
    for (const teamName of teams) {
        const existingTeam = await Teams.findOne({ where: { nombre: teamName } });
        if (!existingTeam) {
            await Teams.create({ nombre: teamName });
        }
    }
};


//TRAER EQUIPOS DE DB
const getAllTeamsFromDatabase = async () => {
    const teams = await Teams.findAll();
    return teams.map(team =>  team.nombre);};

module.exports = { getAllTeamsFromAPI, saveTeamsToDatabase, getAllTeamsFromDatabase };
