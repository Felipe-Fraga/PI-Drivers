import { GET_DRIVERS, SEARCH_DRIVER_BY_NAME, SORT_DRIVERS, GET_TEAMS, CREATE_DRIVER, FILTER_BY_TEAM, FILTER_ORIGIN, DETAIL_CARD } from "./actions";

const initialState = {
    drivers: [],
    allDrivers: [],
    filteredDrivers: [], 
    currentFilter: null,
    currentSort: null,
    currentOrigin: "",
    currentTeam: null,
    teams: [],
};

const rootReduccer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DRIVERS:
            return {...state, drivers: action.payload, allDrivers: action.payload };

        case SEARCH_DRIVER_BY_NAME:
            const filteredNames = state.allDrivers.filter((driver) => 
                `${driver.name} ${driver.surname}`.toLowerCase().includes(action.payload.toLowerCase()));
            return {...state, drivers: filteredNames};

        case SORT_DRIVERS:
            const { order, direction } = action.payload;
            let ordenados;
            if (state.currentFilter === 'team') {
                ordenados = [...state.filteredDrivers].sort((a, b) => {
                    return order === 'name'
                        ? (direction === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
                        : (direction === 'asc' ? new Date(b.dob) - new Date(a.dob) : new Date(a.dob) - new Date(b.dob));
                });
            } else {
                ordenados = [...state.allDrivers].sort((a, b) => {
                    return order === 'name'
                        ? (direction === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
                        : (direction === 'asc' ? new Date(b.dob) - new Date(a.dob) : new Date(a.dob) - new Date(b.dob));
                });
    }
    return { ...state, drivers: ordenados, currentSort: { order, direction }};

            

        case GET_TEAMS:
            return {...state, teams: action.payload};

        case CREATE_DRIVER:
                return {...state, drivers: [...state.drivers, action.payload]};

        case FILTER_BY_TEAM:
                const selectedTeam = action.payload;
                const selectedOrigi = state.currentOrigin; // Obtén el origen actual
                
                // Filtra los conductores por equipo y origen seleccionados
                const filteredTeamAndOrigin = state.allDrivers.filter((driver) => {
                    const teamCondition = driver.teams && driver.teams.includes(selectedTeam);
                    const originCondition =
                        selectedOrigi === "database"
                            ? isNaN(driver.id)
                            : selectedOrigi === "api"
                            ? !isNaN(driver.id)
                            : true; // Si es "todos", muestra todos los conductores
                    return teamCondition && originCondition;
                });
                
                // Aplica el ordenamiento actual si existe
                let sortedFilteredTeamAndOrigin = filteredTeamAndOrigin;
                if (state.currentSort) {
                    const { order, direction } = state.currentSort;
                    sortedFilteredTeamAndOrigin = filteredTeamAndOrigin.sort((a, b) => {
                        if (order === 'name') {
                            return direction === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
                        } else if (order === 'dob') {
                            return direction === 'asc' ? new Date(a.dob) - new Date(b.dob) : new Date(b.dob) - new Date(a.dob);
                        }
                        // Agrega lógica para otros tipos de orden si es necesario
                        return 0; // No se aplica ningún orden
                    });
                }
                
                return {
                    ...state,
                    drivers: sortedFilteredTeamAndOrigin,
                    filteredDrivers: sortedFilteredTeamAndOrigin, // Actualiza los conductores filtrados
                    currentFilter: 'team',
                    currentTeam: selectedTeam
                };
                

                
    case FILTER_ORIGIN:
        console.log(state.currentFilter);
    const selectedOrigin = action.payload;
    const selectedTeams = state.currentFilter === 'team' ? state.currentTeam : null; // Obtén el equipo actual si estás filtrando por equipo

    // Filtra los conductores por origen y equipo seleccionados
    const filteredOriginAndTeam = state.allDrivers.filter((driver) => {
        const originCondition =
            selectedOrigin === "database"
                ? isNaN(driver.id)
                : selectedOrigin === "api"
                ? !isNaN(driver.id)
                : true; // Si es "allOrigins", muestra todos los conductores

        const teamCondition = !selectedTeams || (driver.teams && driver.teams.includes(selectedTeams));

        return originCondition && teamCondition;
    });

    // Aplica el ordenamiento actual si existe
    let sortedFilteredOriginAndTeam = filteredOriginAndTeam;
    if (state.currentSort) {
        const { order, direction } = state.currentSort;
        sortedFilteredOriginAndTeam = filteredOriginAndTeam.sort((a, b) => {
            if (order === 'name') {
                return direction === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            } else if (order === 'dob') {
                return direction === 'asc' ? new Date(a.dob) - new Date(b.dob) : new Date(b.dob) - new Date(a.dob);
            }
            // Agrega lógica para otros tipos de orden si es necesario
            return 0; // No se aplica ningún orden
        });
    }

    return {
        ...state,
        drivers: sortedFilteredOriginAndTeam,
        filteredDrivers: sortedFilteredOriginAndTeam, // Actualiza los conductores filtrados
        currentFilter: state.currentFilter, // Mantén el filtro actual (puede ser 'team' o null)
        currentOrigin: selectedOrigin, // Actualiza el origen seleccionado
    };

                
    

        case DETAIL_CARD:
            return {...state, drivers: action.payload};

        default:
            return {...state};
    }
};

export default rootReduccer