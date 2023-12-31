const URL = "http://localhost:3001"
import axios from "axios"
export const GET_DRIVERS = 'GET_DRIVERS'
export const SEARCH_DRIVER_BY_NAME = 'SEARCH_DRIVER_BY_NAME'
export const SORT_DRIVERS = 'SORT_DRIVERS';
export const GET_TEAMS = 'GET_TEAMS'
export const CREATE_DRIVER = 'CREATE_DRIVER';
export const FILTER_BY_TEAM = "FILTER_BY_TEAM";
export const FILTER_ORIGIN = "FILTER_ORIGIN";
export const DETAIL_CARD = 'DETAIL_CARD'
export const DRIVER_NOT_FOUND_ERROR = 'DRIVER_NOT_FOUND_ERROR'

//uso dispatch para comunicar resultados asíncronos al store de Redux para actualizarlo

export const getDrivers = () => {
    try {
        return async function (dispatch) {
            const drivers = (await axios.get(`${URL}/drivers`)).data
            dispatch({type: GET_DRIVERS, payload: drivers}) 
        }
    } catch (error) {
        console.log(error.message);
    }
};

export const searchDriverByName = (name) => {
    return async function (dispatch) {
        try {
            const drivers = (await axios.get(`${URL}/drivers?name=${name}`)).data;
            dispatch({ type: SEARCH_DRIVER_BY_NAME, payload: drivers });
        } catch (error) {
            dispatch({ type: DRIVER_NOT_FOUND_ERROR, payload: error.response.data.message });        
        }
    }
};


export const sortDrivers = (order, direction) => {
        return {type: SORT_DRIVERS, payload: { order, direction }};
};

export const getTeams = () => {
    try {
        return async function (dispatch) {
            const teams = (await axios.get(`${URL}/teams`)).data
            dispatch({type: GET_TEAMS, payload: teams})
        }
    } catch (error) {
        console.log(error.message);
    }
};

export const createDriver = (driverData) => {
    try {
        return async function (dispatch) {
            const driver = (await axios.post(`${URL}/drivers`, driverData)).data
            dispatch({type: CREATE_DRIVER, payload: driver});
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const filterByTeam = (team) => {
    return {type: FILTER_BY_TEAM, payload: team};
};

export const filterByOrigin = (source) => {
    return {type: FILTER_ORIGIN, payload: source};
};

export const viewDetail = (id) => {
    return async function (dispatch) {
        try {
            const driver = (await axios.get(`${URL}/drivers/${id}`)).data
            dispatch({type: GET_DRIVERS, payload: driver})
        } catch (error) {
            window.alert(error.response.data.message)        
        }
    }
}