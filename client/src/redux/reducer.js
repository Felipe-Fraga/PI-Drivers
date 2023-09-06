import {
    GET_USERS,
    SEARCH_USER_BY_NAME,
    SORT_USERS,
    GET_TEAMS,
    CREATE_DRIVER,
    FILTER_BY_TEAM,
    SET_CHARACTER_SOURCE
} from "./actions";

const initialState = {
    drivers: [],
    allDrivers: [],
    teams: [],
    filteredDrivers: [],
    characterSource: ""
};

const rootReduccer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state, drivers: action.payload, allDrivers: action.payload
            };

        case SEARCH_USER_BY_NAME:
            const filteredDrivers = state.allDrivers.filter((driver) =>
                driver.name.toLowerCase().includes(action.payload.toLowerCase()));
            return {
                ...state, drivers: filteredDrivers
            };

        case SORT_USERS:
            const {
                order, direction
            } = action.payload;
            const ordenados = [...state.drivers];
            ordenados.sort((a, b) => {
                if (order === 'name') {
                    const nameA = `${a.name} ${a.surname}`;
                    const nameB = `${b.name} ${b.surname}`;
                    return direction === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
                } else if (order === 'birthdate') {
                    const dateA = new Date(a.dob)
                    const dateB = new Date(b.dob)
                    return direction === 'asc' ? dateB - dateA : dateA - dateB;
                }
                return 0;
            });
            return {
                ...state, drivers: ordenados
            };

        case GET_TEAMS:
            return {
                ...state, teams: action.payload
            }

        case CREATE_DRIVER:
                return {
                    ...state, drivers: [...state.drivers, action.payload]
                };

        case FILTER_BY_TEAM:
            const selectedTeam = action.payload;
                const filtDrivers = state.drivers.filter((driver) => {
                    if (driver.teams) {
                        const equipos = driver.teams.split(',');
                        return equipos.includes(selectedTeam);
                    }
                    return false;
                });
                    return {
                    ...state,
                    filteredDrivers: filtDrivers,
                    };

    case SET_CHARACTER_SOURCE:
        return {...state, characterSource: action.payload };

        default:
                return {
                    ...state
                }
    }
};

export default rootReduccer