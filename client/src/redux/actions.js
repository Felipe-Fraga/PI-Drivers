const URL = "http://localhost:3001"
import axios from "axios"
export const GET_USERS = 'GET_USERS'
export const SEARCH_USER_BY_NAME = 'SEARCH_USER_BY_NAME'
export const SORT_USERS = 'SORT_USERS';
export const GET_TEAMS = 'GET_TEAMS'
export const CREATE_DRIVER = 'CREATE_DRIVER';

export const getUsers = () => {
    return async function (dispatch) {
        const drivers = (await axios.get(`${URL}/drivers`)).data
        dispatch({type: GET_USERS, payload: drivers})
    }
};

export const searchUserByName = (name) => {
    return { type: SEARCH_USER_BY_NAME, payload: name };
};

export const sortUsers = (orderBy, orderDirection) => {
    return { type: SORT_USERS, payload: { orderBy, orderDirection } };
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