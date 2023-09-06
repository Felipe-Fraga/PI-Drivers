const URL = "http://localhost:3001"
import axios from "axios"
export const GET_USERS = 'GET_USERS'
export const SEARCH_USER_BY_NAME = 'SEARCH_USER_BY_NAME'
export const SORT_USERS = 'SORT_USERS';
export const GET_TEAMS = 'GET_TEAMS'
export const CREATE_DRIVER = 'CREATE_DRIVER';
export const FILTER_BY_TEAM = "FILTER_BY_TEAM";
export const SET_CHARACTER_SOURCE = "SET_CHARACTER_SOURCE";


export const getUsers = () => {
    return async function (dispatch) {
        const drivers = (await axios.get(`${URL}/drivers`)).data
        dispatch({type: GET_USERS, payload: drivers})
    }
};

export const searchUserByName = (name) => {
    return { type: SEARCH_USER_BY_NAME, payload: name };
};

export const sortUsers = (order, direction) => {
    return { type: SORT_USERS, payload: { order, direction } };
};

export const getTeams = () => {
    return async function (dispatch) {
        const teams = (await axios.get(`${URL}/teams`)).data
        dispatch({type: GET_TEAMS, payload: teams})
    }
};

export const createDriver = (driverData) => {
    return async function (dispatch) {
        const driver = (await axios.post(`${URL}/drivers`, driverData)).data
        dispatch({type: CREATE_DRIVER, payload: driver});
    }
}

export const filterByTeam = (team) => {
    return { type: FILTER_BY_TEAM, payload: team };
};

export const setCharacterSource = (source) => {
    return { type: SET_CHARACTER_SOURCE, payload: source };
};