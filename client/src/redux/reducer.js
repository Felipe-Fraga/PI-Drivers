import {
    GET_USERS,
    SEARCH_USER_BY_NAME,
    SORT_USERS
} from "./actions";

const initialState = {
    drivers: [],
};

const rootReduccer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, drivers: action.payload, drivers: action.payload };

        case SEARCH_USER_BY_NAME:
            const filteredUsers = state.drivers.filter((driver) =>
                driver.name.toLowerCase().includes(action.payload.toLowerCase()));
            return { ...state, drivers: filteredUsers };

        case SORT_USERS:
            const { orderBy, orderDirection} = action.payload;
            const sortedDrivers = [...state.drivers];
            sortedDrivers.sort((a, b) => {
                if (orderBy === 'name') {
                    const nameA = `${a.name} ${a.surname}`;
                    const nameB = `${b.name} ${b.surname}`;
                    return orderDirection === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
                } else if (orderBy === 'birthdate') {
                    const dateA =  new Date(a.dob)
                    const dateB =  new Date(b.dob)
                    return orderDirection === 'asc' ? dateA - dateB : dateB - dateA;
                }
                return 0;
            });
            return {...state, drivers: sortedDrivers};

        default:
            return {...state}
    }
};

export default rootReduccer