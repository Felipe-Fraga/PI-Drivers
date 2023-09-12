const { Teams } = require('../db');
const axios = require('axios');
const URL = 'http://localhost:5000/drivers';

const getAllTeamsFromAPI = async () => {
    const drivers = (await axios.get(URL)).data;
    const teamsSet = new Set();                                                 //no repetir
    drivers.forEach(driver => {
        if (driver.teams) driver.teams.split(',').forEach(team => teamsSet.add(team.trim()));
    });
    return Array.from(teamsSet);
};

const saveTeamsToDatabase = async (teams) => {
    await Promise.all(teams.map(async (teamName) => {               //se cargan en db y sigue
        await Teams.findOrCreate({
            where: { nombre: teamName },                                 //busca si ya existe
            defaults: { nombre: teamName }                                          //lo crea
        });
    }));
};

const getAllTeamsFromDatabase = async () => {
    const teams = await Teams.findAll();
    return teams.map(team => team);
};

module.exports = { getAllTeamsFromAPI, saveTeamsToDatabase, getAllTeamsFromDatabase };