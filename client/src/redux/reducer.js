import {
    GET_USERS,
    SEARCH_USER_BY_NAME,
    SORT_USERS,
    GET_TEAMS,
    CREATE_DRIVER
} from "./actions";

const initialState = {
    drivers: [],
    allDrivers: [],
    teams: []
};

const rootReduccer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, drivers: action.payload, allDrivers: action.payload  };

        case SEARCH_USER_BY_NAME:
            const filteredDrivers = state.allDrivers.filter((driver) =>
                driver.name.toLowerCase().includes(action.payload.toLowerCase()));
            return { ...state, drivers: filteredDrivers };


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
            
            case GET_TEAMS:
                return {...state, teams: action.payload}
                
        case CREATE_DRIVER:
            return { ...state, drivers: [...state.drivers, action.payload] };
            default:
                return {...state}
            }
        };

export default rootReduccer