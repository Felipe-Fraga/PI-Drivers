import { GET_DRIVERS, SEARCH_DRIVER_BY_NAME, SORT_DRIVERS, GET_TEAMS, CREATE_DRIVER, FILTER_BY_TEAM, FILTER_ORIGIN, DETAIL_CARD, DRIVER_NOT_FOUND_ERROR } from "./actions";

const initialState = {
    drivers: [],
    allDrivers: [],
    filteredDrivers: [], 
    currentFilter: null,
    currentSort: null,
    currentOrigin: "",
    currentTeam: null,
    teams: [],
    error: ''
};

    const sortDrivers = (drivers, order, direction) =>
        [...drivers].slice().sort((a, b) => 
            order === "name" ? direction === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name) :
            direction === "asc" ? new Date(b.dob) - new Date(a.dob) : new Date(a.dob) - new Date(b.dob));


    const applyFilter = (state, filterType, filterValue) => {
        const selectedTeam = filterType === "team" ? filterValue : state.currentTeam;
        const selectedOrigin = filterType === "origin" ? filterValue : state.currentOrigin;

            const filteredDrivers = state.allDrivers.filter((driver) => {
                const teamCondition = !selectedTeam || (driver.teams && driver.teams.includes(selectedTeam));
                const originCondition = selectedOrigin === "database" ? isNaN(driver.id) : selectedOrigin === "api" ? Number(driver.id) : true;
            return teamCondition && originCondition;
            });

        const sortedDrivers = state.currentSort ? sortDrivers(filteredDrivers, state.currentSort.order, state.currentSort.direction) : filteredDrivers;

        return {...state, drivers: sortedDrivers, filteredDrivers: sortedDrivers, currentFilter: filterType, currentTeam: selectedTeam, currentOrigin: selectedOrigin};
    };


const rootReduccer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DRIVERS:
            return {...state, drivers: action.payload, allDrivers: action.payload };

        case SEARCH_DRIVER_BY_NAME:
            return {...state, drivers: action.payload};

        case DRIVER_NOT_FOUND_ERROR:
            return { ...state, drivers:[], error: action.payload };

        case SORT_DRIVERS:
            const { order, direction } = action.payload;
            const sortedDrivers = sortDrivers(state.currentFilter === 'team' ? state.filteredDrivers : state.allDrivers, order, direction);
            return {...state, drivers: sortedDrivers, currentSort: {order, direction}};

        case GET_TEAMS:
            return {...state, teams: action.payload};

        case CREATE_DRIVER:
                return {...state, drivers: [...state.drivers, action.payload]};

        case FILTER_BY_TEAM:
                return applyFilter(state, "team", action.payload);

        case FILTER_ORIGIN:
                return applyFilter(state, "origin", action.payload);

        case DETAIL_CARD:
            return {...state, drivers: action.payload};

        default:
            return {...state};
    }
};

export default rootReduccer