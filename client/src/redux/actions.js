const URL = "http://localhost:3001/drivers"
import axios from "axios"
export const GET_USERS = 'GET_USERS'
export const SEARCH_USER_BY_NAME = 'SEARCH_USER_BY_NAME'
export const SORT_USERS = 'SORT_USERS';

export const getUsers = () => {
    return async function (dispatch) {
        const drivers = (await axios.get(URL)).data
        dispatch({type: GET_USERS, payload: drivers})
    }
};

export const searchUserByName = (name) => {
    return { type: SEARCH_USER_BY_NAME, payload: name };
};

export const sortUsers = (orderBy, orderDirection) => {
    return { type: SORT_USERS, payload: { orderBy, orderDirection } };
};

